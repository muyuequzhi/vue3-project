<template>
  <div>
    <label class="el-radio el-radio--large" v-for="(item, index) in value">
      <span :class="['el-radio__input', item == actualVal ? 'is-checked' : '']">
        <input ref="radioRef" v-model="modelValue" class="el-radio__original" :value="item" :name="name" type="radio" @change="handleChange" @click.stop />

        <span class="el-radio__inner" />
      </span>
      <span class="el-radio__label" @keydown.stop>
        {{ label[index] }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'

defineProps({
  value: { type: Array, required: true },
  name: { type: String, required: true },
  label: { type: Array, required: true },
})
const emit = defineEmits(['update:modelValue'])
const modelValue = ref('')

const actualVal = computed(() => {
  return modelValue.value
})

function handleChange() {
  console.log(modelValue.value)
  nextTick(() => emit('update:modelValue', modelValue.value))
}
</script>
