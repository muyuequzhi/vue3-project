<script setup lang="ts">
const props = defineProps({
  tableColumnProps: {
    type: <any>Array,
    required: true
  }
})
const columnProps = props.tableColumnProps.map((item) => {
  return {
    sortable: item.sortable ? 'custom' : false,
    // 'min-width': item.minWidth,
    label: item.label,
    align: item.align,
    prop: item.prop,
    slot: item.slot || false
  }
})
</script>

<template>

  <template v-for="item in columnProps">

    <el-table-column v-if="item.children" :label="item.label" :align="item.align">

      <Column :tableColumnProps="item.children">111</Column>

    </el-table-column>

    <el-table-column v-else v-bind="item">
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
</template>