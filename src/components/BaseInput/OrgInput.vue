<script setup>
import { ref } from 'vue'

import InputStyle from './InputStyle.vue'
import OrgTree from '@/components/OrgTree/index.vue'

const label = '机构'
const inputVal = ref('')
const dialogOrgVisible = ref(false)

const props = defineProps({
  modelValue: { type: String },
})
const emit = defineEmits(['update:modelValue'])

function setOrgValFunc(p) {
  console.log(p)
  emit('update:modelValue', p.label)
}
</script>

<template>
  <InputStyle :label="label">
    <template #default>
      <el-input @change="emit('update:modelValue', inputVal)" v-model="inputVal" :value="props.modelValue" />
    </template>
    <template #icon>
      <div class="org-plus">
        <el-icon @click="dialogOrgVisible = true">
          <Plus />
        </el-icon>
      </div>
    </template>
  </InputStyle>

  <el-dialog v-model="dialogOrgVisible" title="机构树" width="800">
    <OrgTree @setOrgVal="setOrgValFunc"></OrgTree>
  </el-dialog>
</template>

<style scoped>
.org-plus {
  position: absolute;
  right: 7px;
  top: 8px;
}

.input-box {
  position: relative;
}
</style>
