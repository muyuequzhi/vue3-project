<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import { Editor } from '@wangeditor/editor-for-vue'

// const html = ref('<h2>hello</h2>')
const htmlValue = ref('')
const props = defineProps({
  html: {
    type: String,
    required: true
  }
})

watch(() => props.html, (newVal) => {
  htmlValue.value = newVal
})
</script>

<template>
  <div style="border: 1px solid #ccc;height: 500px;margin-top: 16px;">
    <Editor style="pointer-events: none;" v-model="htmlValue" mode="simple"></Editor>
  </div>
</template>

<style scoped>
.editor {
  height: 500px;
  width: 500px;
}
</style>