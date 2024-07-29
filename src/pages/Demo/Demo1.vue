<script setup>
import { ref } from 'vue'
const height = ref(0)
</script>

<template>
  <div>
    <div style="display: flex">
      <div style="margin-right: 8px; width: 20px">
        <div style="width: 200px">aaaaaaaaaaaaaaaaaaaaa</div>
      </div>
      <el-input style="width: 180px"></el-input>
    </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1;
  display: flex;
  overflow: auto;
}

.box {
  display: flex;
  min-height: min-content;
  /* needs vendor prefixes */
}

.column {
  width: 40%;
}
</style>
