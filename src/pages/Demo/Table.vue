<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import BaseTable from './BaseTable.vue'
import axios from '@/request/request.ts'
import Table1 from './Table1.vue'
import Form from './Form/index.vue'
import Tsx from './Tsx.vue'
import Checkbox from './Form/Checkbox.vue'
import Jsx from './Jsx/index.vue'
import JsxSlot from './Jsx/slot/index.jsx'

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
    <!-- <Jsx></Jsx> -->
    <JsxSlot></JsxSlot>
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
