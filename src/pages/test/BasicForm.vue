<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import CusElInput from '@/components/BaseInput/CusElInput.vue'

import Radio from '@/components/BaseRadio/radio.vue'

const radioSelVal = ref('')

const formObjResult = ref({
  gs: <any>[],
  sx: <any>[],
})

const formObj = {
  gs: <any>[
    {
      label: '选择',
      type: 'input',
      itemType: 'select',
      value: '',
      isShow: true,
    },
    {
      label: '选择',
      type: 'input',
      itemType: 'select',
      value: '',
      isShow: true,
    },
    {
      label: '输入框1',
      type: 'input',
      itemType: 'time',
      value: '',
      isShow: false,
    },

    {
      label: '输入框1',
      type: 'input',
      itemType: 'input',
      value: '',
      isShow: false,
    },
    {
      label: '输入框2',
      type: 'input',
      itemType: 'input',
      value: '',
      isShow: false,
    },
  ],
  sx: <any>[
    {
      label: '输入框1',
      type: 'radio',
      itemType: '',
      radioVal: [1, 2],
      radioName: ['name1', 'name2'],
      value: '',
      isShow: true,
    },
    {
      label: '选择',
      type: 'input',
      itemType: 'select',
      value: '',
      isShow: true,
    },
    {
      label: '输入框1',
      type: 'input',
      itemType: 'input',
      value: '',
      isShow: true,
    },
    {
      label: '输入框2',
      type: 'input',
      itemType: 'input',
      value: '',
      isShow: true,
    },
  ],
}
function deleteItem(key, i) {
  formObjResult.value[key].splice(i, 1)
}
watch(
  formObjResult,
  (newVal) => {
    const gsList = newVal.gs
    const sxList = newVal.sx
    gsList.map((item) => {
      if (item[0].value == '1' && item[1].value == '1') {
        item[2].isShow = true
      } else {
        item[2].isShow = false
      }
      if (item[0].value == '1' && item[1].value == '2') {
        item[3].isShow = true
      } else {
        item[3].isShow = false
      }
      if (item[0].value == '1' && item[1].value == '3') {
        item[4].isShow = true
      } else {
        item[4].isShow = false
      }
    })
    sxList.map((item) => {
      if (item[0].value == '2' && item[1].value == '1') {
        item[2].isShow = true
      } else {
        item[2].isShow = false
      }
      if ((item[0].value == '2' && item[1].value == '2') || item[0].value == '1') {
        item[3].isShow = true
      } else {
        item[3].isShow = false
      }
    })
  },
  { deep: true },
)

const formObjKeys = computed(() => {
  return Object.keys(formObj)
})

function addForm(name) {
  formObjResult.value[name].push(parseObj(formObj[name]))
}

function parseObj(obj) {
  return JSON.parse(JSON.stringify(obj))
}
</script>

<template>
  <div>
    <div style="">
      <template v-for="key in formObjKeys">
        <div class="form-row">
          <div class="form-title">{{ key }} <el-button type="primary" @click="addForm(key)">add</el-button></div>
          <div>
            <div v-for="(inputList, index) in formObjResult[key]" class="form-box">
              <div v-for="item in inputList" class="form-item">
                <div class="col" v-show="item.isShow" v-if="item.type == 'input'">
                  <CusElInput v-model="item.value" :type="item.type" :itemType="item.itemType" :label="item.label"> </CusElInput>
                </div>
                <div class="col" v-show="item.isShow" v-if="item.type == 'radio'">
                  <Radio v-model="item.value" name="test" :value="item.radioVal" :label="item.radioName"></Radio>
                </div>
              </div>
              <el-button type="danger" @click="deleteItem(key, index)">delete</el-button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <el-row>
      <el-button style="margin: auto" type="primary" @click="$emit('setParTableData', formObjResult)">查询</el-button>
    </el-row>
  </div>
</template>

<style scoped>
.form-row {
  margin: 10px 0;
}

.col {
  margin-bottom: 16px;
}

.form-box {
  padding: 16px 30px;
  display: flex;
  flex-wrap: wrap;

  .el-row {
    margin-bottom: 16px;
  }
}

.col {
  /* width: 33.3%; */
  margin-right: 30px;
}

.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-text {
  margin-right: 10px;
}

.el-input {
  width: 260px;
}

el-select {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
}
</style>
