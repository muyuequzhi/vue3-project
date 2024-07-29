<script setup lang="ts">
// interface TableData {
//   id: Number,
//   value: String
// }
// const props = defineProps<{ tableData: TableData[], tableColumnProps?: any[] }>()

const props = defineProps<{ tableData: any[]; tableColumnProps?: any[] }>()
</script>

<template>
  <div style="margin: 16px">
    <div class="table">
      <table>
        <thead>
          <tr>
            <td v-for="item in tableColumnProps">
              {{ item.label }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData">
            <td v-for="propObj in tableColumnProps">
              {{ item[propObj.prop] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.table table {
  border-collapse: collapse;
}

.table td {
  padding: 6px 16px;
  border: 1px solid var(--border-color);
}
</style>
