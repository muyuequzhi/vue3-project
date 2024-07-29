<script lang="ts" setup>
import { ref, watch } from 'vue'
import RadioStyle from '@/components/BaseRadio/RadioStyle.vue'
import { ElTable } from 'element-plus'

defineProps({
  tableAttr: { type: Array<any>, required: true },
  tableData: { type: Array<any>, required: true },
  radioType: { type: String, default: 'radio' },
})
const emit = defineEmits(['changeTableData', 'changeSelIndex'])
const currentPage4 = ref(1)
const pageSize4 = ref(50)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  emit('changeTableData', val)
}
const handleCurrentChange = (val: number) => {
  emit('changeTableData', val)
}
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const radio1 = ref(0)

function RowClick(row) {
  console.log('click', row.id)
  radio1.value = row.id
  // table.value?.setCurrentRow(row)
  console.log(table.value?.getSelectionRows(), 'ref')
}

const table = ref<InstanceType<typeof ElTable>>()
watch(radio1, (newVal) => {
  // console.log(table.value?.getSelectionRows(), 'ref')
  table.value?.setCurrentRow()
  emit('changeSelIndex', newVal)
})

function setRowClass(data: { row: any; rowIndex: number }) {
  if (data.rowIndex == radio1.value) {
    return 'selected'
  }
}
</script>

<template>
  <div class="item-box">
    <div class="table-box">
      <el-table ref="table" :row-class-name="setRowClass" :data="tableData" stripe height="350" style="width: 100%" @row-click="RowClick" highlight-current-row>
        <template v-for="item in tableAttr" :key="item.id">
          <el-table-column align="center" #default="scope" v-if="item.type == 'radio'" :width="item.width" :fixed="item.fixed ? true : false" label="请选择">
            <RadioStyle :checked="scope.$index == radio1 ? true : false">
              <input class="el-radio__original" name="radio1" type="radio" v-model="radio1" :value="scope.$index" />
            </RadioStyle>
          </el-table-column>
          <el-table-column
            v-else-if="item.type == 'checkbox'"
            type="selection"
            :fixed="item.fixed ? true : false"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            align="center">
          </el-table-column>
          <el-table-column v-else :fixed="item.fixed ? true : false" :prop="item.prop" :label="item.label" :width="item.width" align="center">
          </el-table-column>

          <!-- <el-table-column :fixed="item.fixed ? true : false" :prop="item.prop" :label="item.label" :width="item.width"
          align="left">

        </el-table-column> -->
        </template>
      </el-table>
    </div>
    <el-pagination
      style="justify-content: flex-end"
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 50, 100, 200]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  display: block !important;
}

.table-box {
  margin-bottom: 10px;
}

:deep(.selected td) {
  background-color: #e6a23c !important;
  color: white !important;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.el-text {
  margin-right: 10px;
}

.form-box {
  padding: 16px 10px;

  .el-row {
    margin-bottom: 16px;
  }
}

.el-input {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
}

.item-box {
  width: 100%;

  .item {
    background: #eee;
    border-radius: 5px;
    padding: 10px 0;
    margin: 10px 0;
  }
}
</style>
