<script setup>
defineProps({
  label: { type: String },
  isError: { type: Boolean, default: false },
})
</script>

<template>
  <div class="item-input">
    <div class="label-box">
      <el-text class="mx-1">{{ label }}</el-text>
    </div>

    <div class="input-box" :class="isError ? 'input-error' : ''">
      <slot></slot>
      <div class="el-form-item__error">error msg</div>

      <slot name="icon"></slot>
    </div>
  </div>
</template>
<style scoped>
@import url(./index.scss);
</style>
