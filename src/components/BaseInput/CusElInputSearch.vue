<script setup lang="ts">
import { ref, computed } from 'vue'
import OrgTree from '@/components/OrgTree/index.vue'

const emit = defineEmits(['setOrgVal', 'update:modelValue'])

const dialogOrgVisible = ref(false)
function setOrgValFunc(p) {
  emit('setOrgVal', p)
}

const props = defineProps({
  label: { type: String, required: false },
  type: { type: String },
  itemType: { type: String },
  modelValue: { type: String },
  org: { type: String },
})
const validateObj = {
  phone: /^1[3-9]\d{9}$/,
  email: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
  number: /^-?\d*\.?\d+$/,
}

const inputVal = ref(props.modelValue)

const isError = computed(() => {
  if (!inputVal.value) {
    return true
  }
  if (props.itemType) {
    if (props.itemType == 'org') {
      return false
    }
    return !validateObj[props.itemType].test(inputVal.value)
  }
})

const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>

<template>
  <div class="item-input">
    <div class="label-box">
      <el-text class="mx-1">{{ label }}</el-text>
    </div>
    <div class="input-box" :class="isError ? 'input-error' : ''" v-if="type == 'input'">
      <el-input @change="emit('update:modelValue', inputVal)" v-model="inputVal" :value="props.modelValue" />
      <div class="el-form-item__error">Please input Activity {{ props.type }}</div>

      <div v-if="itemType == 'org'" class="org-plus" style="">
        <el-icon @click="dialogOrgVisible = true">
          <Plus />
        </el-icon>
      </div>
    </div>
    <div class="input-box" :class="isError ? 'input-error' : ''" v-if="type == 'time'">
      <el-date-picker
        @change="emit('update:modelValue', inputVal)"
        style="height: 32px; width: 260px"
        v-model="inputVal"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        size="large" />
    </div>
    <div class="input-box" :class="isError ? 'input-error' : ''" v-if="type == 'select'">
      <el-tree-select
        @change="emit('update:modelValue', inputVal)"
        collapse-tags
        :collapse-tags-tooltip="true"
        v-model="inputVal"
        :data="data"
        multiple
        :render-after-expand="false"
        show-checkbox
        style="width: 260px" />
    </div>
  </div>
  <el-dialog v-model="dialogOrgVisible" title="机构树" width="800">
    <OrgTree @setOrgVal="setOrgValFunc"></OrgTree>
  </el-dialog>
</template>

<style scoped>
@import url(./index.scss);

* {
  font-size: 14px;
}

.el-form-item__error {
  font-size: 12px;
  padding-top: 3px;
  display: none;
}

.input-error {
  .el-form-item__error {
    display: block;
  }

  .el-input {
    border-color: red;
  }
}

.el-date-editor.el-input,
.el-date-editor.el-input__wrapper {
  height: 32px;
}

.el-text {
  position: absolute;
  right: 0;
  /* 默认1.5 改为1， height = font-size * line-height */
  line-height: 1;
  /* (32-14)/2  */
  top: 10px;
  z-index: 1000;
}

.label-box {
  width: 60px;
  white-space: nowrap;
  margin-right: 10px;
  text-align: right;
  height: 32px;
  line-height: 32px;
  position: relative;
}

.el-input {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
}
</style>
