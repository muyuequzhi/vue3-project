<script setup lang="ts">
import { ref, computed, toRefs, onMounted, nextTick } from 'vue'
import Column from './Column.tsx'
const props = defineProps({
  data: {
    type: <any>Array,
    required: true
  },
  tableColumnProps: {
    type: <any>Array,
    required: true
  }
})
const { data } = toRefs(props)
function handleUnit(val) {
  if (!val) {
    return '-'
  }
  if (val.length >= 9) {
    return parseFloat(val) / 100000000 + '亿元'
  } else if (val.length < 9 && val.length > 4) {
    return parseFloat(val) / 10000 + '万元'
  } else {
    return val + '元'
  }
}

const sortFlag = ref('')
const sortProp = ref('')

function handleSort(obj) {
  sortFlag.value = obj.order
  sortProp.value = obj.prop
}

const isDate = (str) => {
  const regex = /^\d{4}-\d{2}-\d{2}/;
  return regex.test(str);
}
// 
const newData = computed(() => {
  const result = data.value
  if (sortFlag.value == 'ascending') {
    result.sort((a, b) => {
      let aVal = a[sortProp.value]
      let bVal = b[sortProp.value]
      let aValNum = parseFloat(aVal)
      let bValNum = parseFloat(bVal)
      if (!aVal || aVal == '-') {
        return 1
      }
      if (!bVal || bVal == '-') {
        return -1
      }
      if (isDate(aVal) && isDate(bVal)) {
        return (new Date(aVal)).getTime() - (new Date(bVal)).getTime()
      }
      if (typeof aValNum == 'number' && typeof bValNum == 'number') {
        return aValNum - bValNum
      }
      return 0
    })
  }
  if (sortFlag.value == 'descending') {
    result.sort((a, b) => {
      let aVal = a[sortProp.value]
      let bVal = b[sortProp.value]
      let aValNum = parseFloat(aVal)
      let bValNum = parseFloat(bVal)
      if (!aVal || aVal == '-') {
        return 1
      }
      if (!bVal || bVal == '-') {
        return -1
      }
      if (isDate(aVal) && isDate(bVal)) {
        return (new Date(bVal)).getTime() - (new Date(aVal)).getTime()
      }
      if (typeof aValNum == 'number' && typeof bValNum == 'number') {
        return bValNum - aValNum
      }
      return 0
    })
  }
  return result
})

const columnProps = computed(() => {
  const result = props.tableColumnProps.map((item) => {
    return {
      sortable: item.sortable ? 'custom' : false,
      label: item.label,
      show: item.show === false ? false : true,
      align: item.align,
      width: item.width || 'auto',
      fixed: item.fixed || false,
      prop: item.prop,
      slot: item.slot || false
    }
  })
  return result
})

const setCellCls = (data: { row: any, column: any, rowIndex: number, columnIndex: number }) => {
  return 'auto-width'
}



const tableRef = ref(null)

const img = 'src/pages/Demo/Table/img/img2.png'
const value1 = ref('')


</script>

<template>

  <div>

    <img :src="img">
    <el-table table-layout="auto" :fit="true" id="myTable" ref="tableRef" class="my-table" @sort-change="handleSort"
      height="300" :data="newData">
      <template v-for="item in columnProps">
        <el-table-column v-bind="item" v-if="item.show">
          <template #default="scope">
            <template v-if="item.slot">
              <slot :name="item.slot" :row="scope.row">
              </slot>
            </template>
            <template v-else>
              {{ item.formatType == 'money' ? handleUnit(scope.row[item.prop]) : scope.row[item.prop] }}
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-date-picker popper-class="datetime-own" v-model="value1" type="datetime" placeholder="Select date and time" />
  </div>

</template>

<style scoped lang="scss">
:deep(.el-table) {
  /* 默认overflow:hidden 会影响box-shadow 不能展示 */
  overflow: initial;
  color: black;
}


:deep(.el-table__header-wrapper) {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.3);
  /* margin: 5px; */
  margin-bottom: 5px;
  width: auto;
  color: black;
}



:deep(.el-table .cell) {
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: unset;
}
</style>