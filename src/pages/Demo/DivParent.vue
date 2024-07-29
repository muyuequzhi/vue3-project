<script setup>
import { ref, nextTick, onMounted } from 'vue'

const lastEditRange = ref(2)
const divRef = ref(null)
const emit = defineEmits(['setText', 'update:modelValue'])
const props = defineProps({
  id: {
    type: Number,
  },
  nodeType: {
    type: String,
  },
  text: {
    type: String,
  },
})
const nodeTypeList = ['H1', 'H2', 'H3']
onMounted(() => {})
function changeDiv() {
  console.log(props)
  lastEditRange.value = window.getSelection().getRangeAt(0).endOffset //保存光标位置
  let childNodes = divRef.value.childNodes
  if (childNodes.length == 0) {
    return
  }
  let text = childNodes[0].textContent
  if (childNodes.length > 1) {
    // emit('setText', { text, index: childNodes.length - 1 },)
  } else {
    emit('setText', { text: '6', id: props.id })
  }

  nextTick(() => updateHtmlAndSetCursor())
}

function updateHtmlAndSetCursor() {
  var divChild = divRef.value.childNodes
  if (divChild.length == 0) {
    return
  }

  let textDom = divChild[0]
  // 更新内部HTML
  // 设置光标位置
  var range = document.createRange()
  range.setStart(textDom, lastEditRange.value)
  range.collapse(true)
  // range.selectNodeContents(div);
  // range.collapse(false);
  var sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

function textareaKeydown(e) {
  console.log(e)
  if (e.ctrlKey && e.keyCode === 13) {
    //ctrl+enter
    // this.textareaRange()
  } else if (e.keyCode === 13) {
    //enter
    // this.send();
    e.preventDefault() // 阻止浏览器默认换行操作

    emit('setText', { text: '', id: props.id + 1, newLine: true })
    return false
  }
}
</script>
<template>
  <div class="input-div" ref="divRef" @keydown="textareaKeydown($event)" contenteditable="true">
    <slot></slot>
  </div>
</template>

<style scoped>
.input-div {
  text-align: left;
  width: 500px;
  height: 500px;
}

*:focus-visible {
  outline: none;
}
</style>
