<script setup>
import { ref, onMounted } from 'vue'
import Editor from '@/components/Editor/index.vue'
import EditorPreview from '@/components/Editor/preview.vue'

const editorRef = ref(null)

const text = ref('')
const handleClick = () => {
  console.log(editorRef.value.valueHtml)
  text.value = editorRef.value.valueHtml
}
const handleUpdate = (val) => {
  text.value = val
}
onMounted(() => {
  console.log(editorRef.value, 'xxx')
})
</script>
<template>
  <div class="container">
    <div>
      <Editor @updateHtml="handleUpdate" ref="editorRef"></Editor>
      <el-button @click="handleClick">click</el-button>
    </div>
    <div>
      <EditorPreview :html="text"></EditorPreview>
    </div>


  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;

  &>div {
    width: 48%;
    margin: 0 1%;
  }
}
</style>
