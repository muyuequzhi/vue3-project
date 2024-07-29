<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import markdownit from 'markdown-it'

import Div from './Div.vue'
import { useDragStore } from './store/index.js'

const store = useDragStore()

const md = markdownit()

const globalData = store.getData
const divRef = ref(null)

const globalObj = ref({
  id: 0,
  nodeType: '',
  text: '',
  dom: '',
  children: [
    {
      id: 0,
      nodeType: '',
      text: '1',
      dom: '',
      focus: true,
    },
  ],
})

function getStrDomName(str) {
  let div = document.createElement('div')
  let result = md.render(str)
  div.innerHTML = result
  if (div.childNodes.length == 0) {
    return str
  } else {
    return div.childNodes[0].nodeName
  }
}

function updateTextChildren({ text, id }) {
  // text.value = p
  console.log(text, id, 'children')
  let nodeType = getStrDomName(text)

  globalObj.value.children.map((item) => {
    if (item.id == id) {
      item.text = text
      item.nodeType = nodeType
      item.dom = md.render(text)
    }
  })
}
let globalId = 0
function addNewLine(text) {
  globalId += 1
  const obj = {
    id: globalId,
    nodeType: '',
    text: '',
    dom: '',
    focus: true,
  }
  globalObj.value.children.splice(globalId, 0, obj)
}
function textareaKeydown(e) {
  if (e.ctrlKey && e.keyCode === 13) {
    //ctrl+enter
    // this.textareaRange()
  } else if (e.keyCode === 13) {
    //enter
    // this.send();
    e.preventDefault() // 阻止浏览器默认换行操作
    console.log(e, 'enter', globalData)
    if (globalObj.value.children[globalData.curId].text.at(-1) !== '\n') {
      globalObj.value.children[globalData.curId].text += '\n'
      // updateTextChildren()
      return false
    }

    addNewLine({ text: '' })
    return false
  }
}

function changeDiv(e) {
  let cursor = window.getSelection().getRangeAt(0).endOffset //保存光标位置
  console.log(e.target)
  store.updateData('cursor', cursor)
  let childNodes = divRef.value.childNodes
  if (childNodes.length == 0) {
    return
  }
  let text = childNodes[0].textContent

  // if (childNodes.length > 1) {
  // } else {
  //   emit('setText', { text, id: props.id })
  // }

  // nextTick(() => updateHtmlAndSetCursor(cursor))
}
function updateHtmlAndSetCursor(cursorNum) {
  // store.updateData('curId', props.id)
  var divChild = divRef.value.childNodes
  if (divChild.length == 0) {
    var range = document.createRange()
    range.setStart(divRef.value, cursorNum)
    range.collapse(true)
    // range.selectNodeContents(div);
    // range.collapse(false);
    var sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    return
  } else {
    let textDom = divChild[0]
    // 更新内部HTML
    // 设置光标位置
    var range = document.createRange()
    range.setStart(textDom, cursorNum)
    range.collapse(true)
    // range.selectNodeContents(div);
    // range.collapse(false);
    var sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  }
}

// var child = document.getElementById('my_element');
// var parent = child.parentNode;
// // The equivalent of parent.children.indexOf(child)
// var index = Array.prototype.indexOf.call(parent.children, child);
</script>
<template>
  <div>
    input
    <div class="input-div" ref="divRef" @input="changeDiv($event)" @keydown="textareaKeydown($event)" contenteditable="true">
      <Div v-for="item in globalObj.children" :nodeType="item.nodeType" :id="item.id" :text="item.text"> </Div>
    </div>
  </div>
</template>

<style>
.text {
  padding: 10px;
}

*:focus-visible {
  outline: none;
}
</style>
