<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: { type: String, required: false },
  modelValue: { type: String },
})

const inputVal = ref('')

// eslint-disable-next-line vue/no-setup-props-destructure
</script>

<template>
  <div class="item-input">
    <div class="label-box">
      <el-text class="mx-1">{{ label }}</el-text>
    </div>

    <div>
      <el-input @change="emit('update:modelValue', inputVal)" v-model="inputVal" :value="props.modelValue" placeholder="Please input" />
    </div>
  </div>
</template>

<style scoped>
@import url(./index.scss);
</style>
