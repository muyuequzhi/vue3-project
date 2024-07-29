<script setup>
import { ref } from 'vue'
const radioList = [
  { label: '11', value: '1' },
  { label: '22', value: '2' },
  { label: '33', value: '3' },
]
const chkValList = ref([])
const radioVal = ref('')
</script>
<template>
  <div>
    checkbox
    <el-checkbox-group v-model="chkValList">
      <!-- 这个版本lable 作为value  -->
      <el-checkbox :label="item.value" v-for="item in radioList">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>

    radio
    <el-radio-group v-model="radioVal" class="ml-4">
      <!-- 这个版本lable 作为value  -->
      <el-radio :label="item.value" v-for="item in radioList">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </div>
</template>
