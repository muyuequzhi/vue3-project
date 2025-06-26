<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ val }}
      <el-icon class="el-icon--right">
        <arrow-right />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="Action 1">Action 1</el-dropdown-item>
        <el-dropdown-item command="Action 2">Action 2</el-dropdown-item>
        <el-dropdown-item command="Action 3">Action 3</el-dropdown-item>
        <el-dropdown-item command="Action 4">Action 4</el-dropdown-item>
        <el-dropdown-item command="Action 5">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const val = ref('Action 1')
const handleCommand = (command: string) => {
  val.value = command
}
</script>

<style scoped>
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset !important;
  /* 或 outline: none; */
}
</style>