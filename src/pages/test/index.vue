<script lang="ts" setup>
import { ref } from 'vue'
import CardWrapper from '@/components/CardWrapper/index.vue'
import BaseTable from '@/components/BaseTable/index.vue'
import BasicForm from './BasicForm.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import JsxDemo from '@/components/CreateNode/index.ts'
// import SlotDemo from '@/components/Demo/SlotDemo.vue'
import Drag from '@/components/Drag.vue'
import Checkbox from '@/components/BaseCheckbox/Checkbox.vue'

import { getTableData } from './data'

const tableData = ref([])
const fullScreenVal = ref(false)
function setTableData(param) {
  console.log(param)
  fullScreenVal.value = true
  getTableData().then((res) => {
    tableData.value = res.data.data
    fullScreenVal.value = false
  })
}

const tableSelIndex = ref('0')
function changeSelIndex(val) {
  tableSelIndex.value = val
  console.log('changeSelIndex', tableSelIndex.value)
}

const tableAttr = [
  { prop: 'id', label: 'id', width: '80', fixed: true, type: 'radio' },
  { prop: 'col1', label: 'col1', fixed: true, width: '180' },
  { prop: 'col2', label: 'col2', width: '180' },
  { prop: 'col3', label: 'col3', width: '180' },
  { prop: 'col4', label: 'col4', width: '180' },
  { prop: 'col5', label: 'col5', width: '180' },
  { prop: 'col6', label: 'col6', width: '180' },
  { prop: 'col7', label: 'col7', width: '180' },
]
import CheckboxGroup from '@/components/BaseCheckbox/CheckboxGroup.vue'

const checkList = ref([])
const checkValList = ['1', '2', '3']
</script>

<template>
  <CheckboxGroup v-model="checkList">
    <template v-for="item in checkValList">
      <Checkbox :lable="item" :value="item"></Checkbox>
    </template>
  </CheckboxGroup>

  <div class="item-box" v-loading="fullScreenVal">
    <div>
      <!-- <BaseForm></BaseForm> -->
      <JsxDemo></JsxDemo>
      <BasicForm @setParTableData="setTableData"> </BasicForm>
      <CardWrapper title="测试数据">
        <BaseTable @change-sel-index="changeSelIndex" @change-table-data="setTableData" :tableAttr="tableAttr" :tableData="tableData" radioType="radio">
        </BaseTable>
      </CardWrapper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item-box {
  width: 100%;

  .item {
    background: #eee;
    border-radius: 5px;
    padding: 10px 0;
    margin: 10px 0;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
