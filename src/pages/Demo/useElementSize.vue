<script setup>
import { onMounted, ref, watch } from 'vue'
import { useElementSize } from './useElementSize.ts'

const text = ref('')
const div1 = ref(null)
const div2 = ref(null)
const width = ref(40)
let sizeObj = ref({ width: 0 })

onMounted(() => {
  watch(
    width,
    (newVal) => {
      useElementSize(div2, width)
    },
    { immediate: true },
  ),
    (sizeObj.value.width = useElementSize(div2))
})
</script>

<template>
  <div>
    <div>
      <el-space direction="vertical" size="large">
        <el-input-number v-model="width" :min="0" :max="1000" :step="20" />
      </el-space>
      <div class="div2 process" ref="div2">{{ sizeObj.width }}</div>
    </div>
  </div>
</template>

<style scoped>
.div2 {
  background-color: var(--primary-color);
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: white;
  width: 0px;
  border-radius: 15px;
  margin: auto;
}

.process {
  transition: width 0.3s ease-in-out;
}
</style>
