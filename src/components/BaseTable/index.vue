<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  tableAttr: { type: Array<any>, required: true },
  tableData: { type: Array<any>, required: true },
})
const currentPage4 = ref(1)
const pageSize4 = ref(50)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
</script>

<template>
  <div class="item-box">
    <el-table :data="tableData" stripe height="350" style="width: 100%">
      <template v-for="item in tableAttr" :key="item.id">
        <el-table-column :fixed="item.fixed ? true : false" :prop="item.prop" :label="item.label" :width="item.width" align="center" />
      </template>
    </el-table>
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
