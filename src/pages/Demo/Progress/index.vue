<template>
  <div class="demo-progress" :style="`width: ${width}px;`">
    <el-progress :text-inside="true" :stroke-width="height" :color="color" :percentage="perVal" status="exception">
      <span>content</span>
    </el-progress>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  perVal: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  color: {
    type: String
  },
})


</script>

<style scoped></style>
