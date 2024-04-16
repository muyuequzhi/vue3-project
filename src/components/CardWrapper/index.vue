<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>
<template>
  <div class="card-wrapper">
    <div class="card-header">
      <div class="card-title">{{ props.title }}</div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-wrapper {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  .card-header {
    border-bottom: 1px solid #e5e5e5;
    text-align: left;
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .card-content {
    width: 100%;
  }
}
</style>
