<template>
  <div>
    <label class="el-checkbox el-checkbox--large">
      <span :class="['el-checkbox__input', checked ? 'is-checked' : '']">
        <input ref="radioRef" v-model="checked" class="el-radio__original" :value="value" :name="name" type="checkbox" @change="handleChange" @click.stop />

        <span class="el-checkbox__inner" />
      </span>
      <span v-if="label" class="el-checkbox__label" @keydown.stop>
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue'
const props = defineProps({
  label: { type: String },
  value: { type: String, required: true },
})
const checked = ref(props.modelValue)
const emit = defineEmits('update:modelValue', checked)

watch(checked, (newVal) => {
  updateCheckboxList({ [props.value]: newVal })
})

const updateCheckboxList = inject('updateCheckboxList')
</script>
