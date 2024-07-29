<script setup>
import Demo1 from './Animate/demo1.vue'
import Demo2 from './Animate/demo2.vue'
import Demo3 from './Animate/demo3.vue'

import { ref } from 'vue'
const activeName = ref('')
</script>
<template>
  <div class="container">
    <!-- <component :is="activeName"></component> -->
    <Demo1></Demo1>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="User" name="Demo1">User</el-tab-pane>
      <el-tab-pane label="Config" name="Demo2">Config</el-tab-pane>
      <el-tab-pane label="Role" name="Demo3">Role</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
