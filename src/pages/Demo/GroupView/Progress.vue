<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  perVal: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="progress" :style="`height: ${height}px;width: ${width}px;`">
    <div class="progress-outer">
      <div class="progress-inner" :style="`width: ${perVal}%;`">
        <div class="progress-label">
          {{ perVal + '%' }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.progress-outer {
  height: 100%;
  border-radius: 100px;
  background-color: var(--el-border-color-lighter);
  position: relative;
  vertical-align: middle;
}

.progress-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #9fb1f4 0%, #6679e5 100%);
  text-align: right;
  border-radius: 100px;
  line-height: 1;
  white-space: nowrap;
  transition: width 0.6s ease;
}

.progress-label {
  line-height: 26px;
  display: inline-block;
  padding: 0 15px;
  background: #6679e5;
  border-radius: 15px;
  position: relative;
  top: -8px;
  font-size: 12px;
  color: #ffffff;
  border: 1px solid #ffffff;
}
</style>