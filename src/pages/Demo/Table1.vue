<script setup>
import { ref } from 'vue'
const props = defineProps({
  tableData: {
    type: Array,
  },
})
const data = ref([])
data.value = props.tableData
</script>

<template>
  <div>
    <div v-for="item in data">{{ item }}</div>
  </div>
</template>
