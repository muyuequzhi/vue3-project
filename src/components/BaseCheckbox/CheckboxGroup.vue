<script setup>
import { ref, watch, provide } from 'vue'

provide('updateCheckboxList', updateCheckboxList)

const emit = defineEmits('update:modelValue')

const resultObj = ref({})

function updateCheckboxList(p) {
  let key = Object.keys(p)
  resultObj.value[key] = p[key]
}

watch(
  resultObj,
  (newVal) => {
    let result = []
    Object.keys(newVal).map((item) => {
      if (newVal[item]) {
        result.push(item)
      }
    })
    emit('update:modelValue', result)
  },
  { deep: true },
)
</script>

<template>
  <div>
    <div>
      <slot :data="[]"></slot>
    </div>
  </div>
</template>
