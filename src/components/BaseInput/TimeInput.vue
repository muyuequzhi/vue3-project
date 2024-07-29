<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: { type: String },
})
const emit = defineEmits(['update:modelValue'])
const inputVal = ref(props.modelValue)
</script>

<template>
  <InputStyle label="时间">
    <template #default>
      <el-date-picker
        @change="emit('update:modelValue', inputVal)"
        style="height: 32px; width: 260px"
        v-model="inputVal"
        type="date"
        placeholder="Pick a day"
        size="large" />
    </template>
  </InputStyle>
</template>
