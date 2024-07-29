<script setup>
import { ref } from 'vue'
const height = ref(0)
const show = ref(false)
</script>

<template>
  <div class="container">
    <div>
      <el-button @click="show = !show">click</el-button>
    </div>
    <div class="circle-box" style="height: 60px">
      <Transition name="fade">
        <div class="circle" v-show="show"></div>
      </Transition>
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin: auto;
}

.circle-box {
  position: relative;
}

.container {
  width: 200px;
}

.container > div {
  margin-bottom: 16px;
}

.line {
  height: 3px;
  width: 100%;
  background-color: var(--primary-color);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(100px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
