<template>
  <div>
    <label class="el-radio el-radio--large">
      <span :class="['el-radio__input', checked ? 'is-checked' : '']">
        <slot></slot>

        <span class="el-radio__inner" />
      </span>
      <span v-if="label" class="el-radio__label" @keydown.stop>
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String },
  checked: { type: Boolean, default: false },
})
</script>
