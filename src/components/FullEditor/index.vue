<script lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('')

    // 标题列表
    const headers = ref<any[]>([])

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      //   setTimeout(() => {
      //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
      //   }, 1500)
    })

    const toolbarConfig = {
      // excludeKeys: ['insertVideo', 'uploadVideo', 'editVideoSize'],
    }
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor: any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
      //   console.log(editor.getAllMenuKeys())
    }

    const handleChanged = (editor: any) => {
      headers.value = editor.getElemsByTypePrefix('header')
    }

    const handleScroll = (event: any) => {
      if (event.target.tagName !== 'LI') return
      event.preventDefault()
      const id = event.target.id
      const editor = editorRef.value
      editor.scrollToElem(id) // 滚动到标题
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleChanged,
      handleScroll,
      headers,
    }
  },
}
</script>
<template>
  <div class="page-right" style="display: flex">
    <!-- 编辑器 DOM -->
    <div style="border: 1px solid #ccc; flex: 1; width: calc(100vw - 370px)">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChanged" />
    </div>

    <!-- 标题目录 -->
    <div style="width: 200px; background-color: #f1f1f1">
      <ul id="header-container" @mousedown="handleScroll">
        <li v-for="item in headers" :key="item.id" :id="item.id" :type="item.type">
          {{ item.children && item.children.length ? item.children[0].text : '' }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
#header-container {
  list-style-type: none;
  padding-left: 20px;
  text-align: left;
  li {
    color: #333;
    margin: 10px 0;
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
  }

  li[type='header1'] {
    font-size: 20px;
    font-weight: bold;
  }

  li[type='header2'] {
    font-size: 16px;
    padding-left: 15px;
    font-weight: bold;
  }

  li[type='header3'] {
    font-size: 14px;
    padding-left: 30px;
  }

  li[type='header4'] {
    font-size: 12px;
    padding-left: 45px;
  }

  li[type='header5'] {
    font-size: 12px;
    padding-left: 60px;
  }
}
</style>
