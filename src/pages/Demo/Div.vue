<script setup>
import { ref, nextTick, onMounted } from 'vue'

import { useDragStore } from './store/index.js'

const store = useDragStore()
const cursor = store.getData.cursor

const lastEditRange = ref(2)
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
  focus: {
    type: Boolean,
  },
})

const nodeTypeList = ['H1', 'H2', 'H3']

onMounted(() => {
  if (props.focus) {
    nextTick(() => updateHtmlAndSetCursor(0))
  }
})
</script>
<template>
  <template v-if="nodeType == 'H1'">
    <h1>
      <div ref="divRef">{{ text }}</div>
    </h1>
  </template>
  <template v-else-if="nodeType == 'H2'">
    <h2>
      <div ref="divRef">{{ text }}</div>
    </h2>
  </template>
  <template v-else-if="nodeType == 'H3'">
    <h3>
      <div ref="divRef">{{ text }}</div>
    </h3>
  </template>
  <template v-else>
    <div class="input-div" ref="divRef">
      {{ text }}
    </div>
  </template>
</template>

<style scoped>
.input-div {
  text-align: left;
  line-height: 20px;
  height: 20px;
  width: 100%;
}

*:focus-visible {
  outline: none;
}

h1 {
  font-size: 2em;
}
</style>
