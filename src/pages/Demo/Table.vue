<script lang="ts" setup>
import { reactive, ref, watch, toRef, nextTick, onMounted } from 'vue'
import BaseTable from './Table/BaseTable.vue'
import Table from './Table/index.vue'
import axios from '@/request/request.ts'
import Table1 from './Table1.vue'
import Form from './Form/index.vue'
import Tsx from './Tsx/index.vue'
import Checkbox from './Form/Checkbox.vue'
import UpLoad from './File/index.vue'
import TreeSelect from './TreeSelect/index.vue'
import { getTableData1 } from './data.ts'
import Tree from './Tree/index.vue'
import TableTsx from './Table/index1.vue'
import Confirm from './Confirm.vue'
import Validate from './Validate.vue'
import DropDown from './DropDown/index.vue'
import autoHeightText from './autoHeightTextarea/index.vue'
import PromiseDemo from './JavaScript/promise.vue'
import Jsx from './Jsx/index.vue'
import JsxSlot from './Jsx/slot/index.jsx'

const selectVal = ref('1')
// watch(selectVal, () => {
//   // console.log(selectVal.value)
//   if (selectVal.value == '2') {
//     tableColumnProps[1].show = true
//   } else {
//     tableColumnProps[1].show = false
//   }
// })
const tableColumnProps = reactive([
  {
    label: '第一列',
    prop: 'name',
    align: 'center',
    width: 100,
    fixed: true,
    // children: [
    //   {
    //     label: '第一列-1',
    //     align: 'center',
    //     prop: 'colName',

    //   }
    // ]
  },
  {
    prop: 'date',
    label: '日期',
    fixed: true,
    show: selectVal.value == '2' ? true : false,
    sortable: true,
    align: 'center',
  },
  {
    prop: 'name',
    label: '名称',
    width: 260,
    fixed: true,
    align: 'center',
    // sort: false
  },
  {
    prop: 'name2',
    label: '名称2',
    align: 'center',
    slot: 'name2',
    // sort: false
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },

  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
  {
    prop: 'val',
    label: '值',
    sortable: true,
    formatType: 'money',
    align: 'center',
  },
])

const bbb = toRef({ value: selectVal.value })
function handleClick() {
  //   tableColumnProps[1].prop = 'xxx'
  // tableColumnProps[1].show = true
  console.log(bbb.value, 'bbb')
}
const loading = ref(true)

const tableData6 = ref([])
getTableData1().then((res) => {
  tableData6.value = res.data
  loading.value = false
})


const tableData = [
  {
    colName: 'col1',
    date: '2016-05-03',
    name: 'TomTomTomTomTomTomTomTom',
    name2: 'TomTom1',
    address: 'No. 189',
    val: '100000000',
  },
  {
    colName: 'col2',
    date: '2016-05-02',
    name: 'Tom',
    name2: 'TomTom2',
    address: 'No. 189',
    val: '20000000',
  },
  {
    colName: 'col3',
    date: '-',
    name: 'c',
    name2: 'TomTom3',
    address: 'No. 189',
    val: '5',
  },
  {
    colName: 'col1',
    date: '2016-05-03',
    name: 'TomTomTomT',
    name2: 'TomTom',
    address: 'No. 189',
    val: '100000000',
  },
  {
    colName: 'col2',
    date: '2016-05-02',
    name: 'Tom',
    name2: 'TomTom',
    address: 'No. 189',
    val: '20000000',
  },
  {
    colName: 'col3',
    date: '-',
    name: 'c',
    name2: 'TomTom',
    address: 'No. 189',
    val: '5',
  },
]

const tableDataNew = reactive({ list: [] })
tableDataNew.list = tableData

const tableData1 = [
  {
    id: 1,
    value: '666',
  },
]

const tableData3 = reactive({
  list: []
})

setTimeout(() => {
  tableData3.list = tableData
}, 1500)

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

import BaseInput from '@/components/BaseInput/index.vue'
const vvv = ref('')
watch(vvv, (newVal) => {
  console.log(newVal)
})

window.addEventListener('storage', (e) => {
  console.log(e, 666)
})
window.localStorage.setItem('key', +new Date() + '')

const formRef = ref(null)
const formTableData = reactive({
  // 表格数据 list 为 表单数据 form 的嵌套元素
  list: [
    { name: "", age: "", mail: "" },
    { name: "Vue", age: "6", mail: "666666@qq.com" },
  ],
})
const rules = {
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    {
      min: 3,
      max: 5,
      message: "长度在 3 到 5 个字符",
      trigger: "blur",
    },
  ],
  age: [
    {
      validator: function (rule, value, callback) {
        console.log(value)
        if (/^[0-9]*$/.test(value) == false) {
          callback(new Error("请输入正确的数字"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  mail: [
    { type: "email", message: "请输入正确的Email", trigger: "blur" },
  ],
}

const disableDateVal = (time: Date) => {
  console.log(time)
  // return time.getTime() > Date.now()
  // return true
}

import { Decimal } from 'decimal.js';

let a = new Decimal(80.845)
let b = new Decimal(-80.845)
let c = new Decimal(0)
console.log(a.toFixed(2), b.toFixed(2), c.toFixed(2), 999)

const radioVal = ref('1')
watch(radioVal, (val) => {
  console.log(val)
})


const currentPage4 = ref(4)

const pageSize4 = ref(100)
const size = ref<any>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>
<template>
  <!-- <el-input v-model="text" :autosize="{ minRows: 4 }" type="textarea" style="margin-bottom: 16px;" /> -->
  <div>
    <!-- <Jsx></Jsx> -->
    <JsxSlot></JsxSlot>
    <!-- <autoHeightText></autoHeightText> -->
    <!-- <PromiseDemo></PromiseDemo> -->
    <!-- <div>
      <div class="long-text" v-html="longText.replaceAll('\n', '<br>')">

      </div>
  </div> -->
    <!-- <el-input v-model="longText" style="width: 240px" :rows="3" type="textarea" placeholder="Please input" /> -->
    <!-- <el-pagination :current-page="currentPage4" :page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" :size="size"
      :disabled="false" background layout="total, sizes, prev, pager, next, jumper" :total="400"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <el-row>
      <el-col :span="24">

        <el-radio-group name="xxx" v-model="radioVal">
          <el-radio name="xxx" value="1" label="1"></el-radio>
          <el-radio name="xxx" value="2" label="2"></el-radio>
        </el-radio-group>
      </el-col>
    </el-row> -->
    <!-- <Scroll></Scroll> -->
    <!-- <DropDown></DropDown> -->
    <!-- <UpLoad>
      </UpLoad> -->
    <!-- <TreeSelect></TreeSelect> -->
    <!-- <Process :width="500" :perVal="50" :height="12" :color="'#6679E5'" class="line">

    </Process> -->


    <!-- <Confirm style="margin-bottom: 16px;"></Confirm> -->

    <!-- 
    <Tree></Tree>
    <el-select v-model="selectVal">
      <el-option label="o1" value="1"></el-option>
      <el-option label="o2" value="2"></el-option>
    </el-select>
    <el-button @click="handleClick()" style="margin-bottom: 16px;">change</el-button>
    <div v-loading="loading">
      <Table :data="tableData6" :tableColumnProps="tableColumnProps" style="width: 50vw">
        <template #firstCol="row">
          <el-table-column selectable width="39"></el-table-column>
        </template>
<template #name2="row">
          {{ row.row.name + '--22' }}
        </template>

</Table>
</div> -->

    <!-- <BaseInput v-model="vvv"></BaseInput>
    <BaseTable style="width: 550px;" :data="tableData" :tableColumnProps="tableColumnProps">
    </BaseTable> -->
    <!-- <Tsx></Tsx> -->
    <!-- <Checkbox></Checkbox> -->

    <!-- <el-date-picker style="margin-bottom: 12px;" v-model="data.startDate" :disabled-date="disableDateVal" type="date"
      placeholder="Pick a day" /> -->

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
    <!-- <el-table :data="tableData3.list" style="width: 1000px">
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">

        <template #default="scope">

          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
    </el-table> -->

    <!-- <el-button @click="formRef.validate()">click</el-button>
    <el-form ref="formRef" :model="formTableData">
      <el-table :data="formTableData.list" border>
        <el-table-column label="姓名" width="250px">
          <template #default="scope">

            <el-form-item :prop="'list.' + scope.$index + '.name'" :rules="rules.name">
              <el-input v-model="scope.row.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="250px">
          <template #default="scope">
            <el-form-item :prop="'list.' + scope.$index + '.age'" :rules="rules.age">
              <el-input v-model="scope.row.age" :validate-event="false" placeholder="请输入年龄"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="邮箱" width="250px">
          <template #default="scope">
            <el-form-item :prop="'list.' + scope.$index + '.mail'" :rules="rules.mail">
              <el-input v-model="scope.row.mail" placeholder="请输入邮箱地址"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form> -->

    <!-- <TableTsx style="width: 1200px;" :data="tableDataNew.list" :tableColumnProps="tableColumnProps">
      <template #name2="{ row }">
        <el-input style="width: 200px;" v-model="row.name2"></el-input>
      </template>
    </TableTsx> -->

    <!-- <Validate></Validate> -->

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.line {
  margin-bottom: 12px;
}

.box-shadow-box {
  overflow: hidden;
}

.box-shadow-test {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.3);
  /* 必须有这个才能显示阴影 */
  margin: 10px;
}

/* :deep(.el-table__header-wrapper .el-table__header thead) {
  box-shadow: 0 0 10px 10px rgb(250, 248, 12);
} */
textarea {
  border: none;
  color: black;
  background-color: white;
  resize: none;
  overflow: hidden;
  padding: 0;
}
</style>
