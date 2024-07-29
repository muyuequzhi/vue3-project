<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import BaseTable from './BaseTable.vue'
import axios from '@/request/request.ts'
import Table1 from './Table1.vue'
import Form from './Form/index.vue'
import Tsx from './Tsx.vue'
import Checkbox from './Form/Checkbox.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189',
    val: 1,
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189',
    val: 2,
  },
  {
    date: '-',
    name: 'c',
    address: 'No. 189',
    val: '-',
  },
]
const tableData1 = [
  {
    id: 1,
    value: '666',
  },
]

const tableData2 = ref([])
// axios({ url: '/getTableData', method: 'get' })
//   .then((res) => {
//     console.log(res.data)
//     tableData2.value = res.data
//   })

const data = ref({
  dateList: [''],
  startDate: '',
})
watch(data.value, (newVal) => {
  console.log(newVal)
})
const value1 = ref('')
const html = "<span class='red-text' > 111 </span>"

const propList = ['date', 'name', 'val']
const labelList = ['日期', '名称', '值']
const sortList = ['date', 'val']

const tableColumnProps = [
  {
    prop: 'date',
    label: '日期',
    sort: true,
    align: 'center',
  },
  {
    prop: 'name',
    label: '名称',
    align: 'center',
    // sort: false
  },
  {
    prop: 'val',
    label: '值',
    sort: true,
    align: 'center',
  },
]
</script>
<template>
  <div>
    <el-table header-row-class-name="xxx" :data="tableData" style="width: 550px">
      <el-table-column v-for="item in tableColumnProps" :prop="item.prop" :label="item.label" :align="item.align" :sortable="item.sort" />
      <!-- <el-table-column v-for="(item, index) in propList" :prop="item" :label="labelList[index]"
        :sortable="sortList.includes(item)" width="180" /> -->

      <!-- <el-table-column prop="date" sortable label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="val" sortable label="val" width="180" /> -->
    </el-table>
    <BaseTable :tableData="tableData" :tableColumnProps="tableColumnProps"></BaseTable>
    <!-- <Tsx></Tsx> -->
    <!-- <Checkbox></Checkbox> -->

    <!-- <el-date-picker v-model="data.startDate" type="date" placeholder="Pick a day" /> -->

    <!-- 
    <el-row>
      <el-col :span="8">12</el-col>
      <el-col :span="8">2</el-col>
      <el-col :span="8">3</el-col>
      <el-col :span="8">3</el-col>
      <el-col :span="8">3</el-col>
      <el-col :span="8">3</el-col>
    </el-row> -->

    <!-- <Form></Form> -->
    <!-- <Table1 :tableData="tableData2"></Table1> -->
    <div class="box-shadow-box" style="width: 500px; margin-bottom: 10px">
      <div class="box-shadow-test">111</div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.box-shadow-box {
  overflow: hidden;
}

.box-shadow-test {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.3);
  /* 必须有这个才能显示阴影 */
  margin: 10px;
}

:deep(.el-table__header-wrapper) {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.3);
  /* margin: 5px; */
  margin-bottom: 5px;
  width: auto;
  color: black;
}

:deep(.el-table) {
  /* 默认overflow:hidden 会影响box-shadow 不能展示 */
  overflow: initial;
  color: black;
}

:deep(.red-text) {
  color: red;
}

/* :deep(.el-table__header-wrapper .el-table__header thead) {
  box-shadow: 0 0 10px 10px rgb(250, 248, 12);
} */
</style>
