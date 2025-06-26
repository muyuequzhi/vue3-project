<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'


const text = ref('')
const longText = ref(`今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
  今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了今天下雨了，
`)

const longText1 = ref('xxx')
const arrowFlag = ref(0) // 0展开 1收起
const setTextHeight = () => {
  let textarea = document.getElementById('textarea')

  if (arrowFlag.value == 0) {
    textarea.style.height = textarea.scrollHeight + 'px'
    textarea.parentNode.style.height = textarea.scrollHeight + 'px'
    arrowFlag.value = 1
  } else {
    textarea.style.height = '126px'
    textarea.parentNode.style.height = '126px'
    arrowFlag.value = 0
  }

}

const setTextExpand = () => {
  let textarea = document.getElementById('textarea')
  if (parseFloat(textarea.style.height) !== textarea.scrollHeight) {
    arrowFlag.value = 0
  } else {
    arrowFlag.value = 1
  }
}

onMounted(() => {
  nextTick(() => {
    setTextExpand()

  })
})
</script>

<template>
  <div>

    <div style="position: relative;height: 126px;">
      <textarea v-model="longText" class="textarea" style="height: 126px;" id="textarea" disabled></textarea>
      <span
        style="position: absolute;height:21px;bottom: 0px;right: 0px;background-color: white;display: inline-block;">
        <el-icon v-show="arrowFlag == 0" @click="setTextHeight">
          <ArrowDownBold />
        </el-icon>

        <el-icon v-show="arrowFlag == 1" @click="setTextHeight">
          <ArrowUpBold />
        </el-icon>
      </span>
    </div>
  </div>
</template>

<style scoped>
.textarea {
  border: none;
  background-color: white;
  width: 400px;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  resize: none;
  padding: 0;
}
</style>
