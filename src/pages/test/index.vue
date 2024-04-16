<script lang="ts" setup>
import { ref } from 'vue'
import CardWrapper from '@/components/CardWrapper/index.vue'
import BaseTable from '@/components/BaseTable/index.vue'
import BasicForm from './BasicForm.vue'

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

const tableAttr = [
  { prop: 'id', label: 'id', width: '180', fixed: true },
  { prop: 'col1', label: 'col1', width: '180' },
  { prop: 'col2', label: 'col2', width: '180' },
  { prop: 'col3', label: 'col3', width: '180' },
  { prop: 'col4', label: 'col4', width: '180' },
  { prop: 'col5', label: 'col5', width: '180' },
  { prop: 'col6', label: 'col6', width: '180' },
  { prop: 'col7', label: 'col7', width: '180' },
]
</script>

<template>
  <div class="item-box" v-loading="fullScreenVal">
    <div>
      <BasicForm @setParTableData="setTableData"></BasicForm>
      <CardWrapper title="测试数据">
        <BaseTable :tableAttr="tableAttr" :tableData="tableData"></BaseTable>
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
