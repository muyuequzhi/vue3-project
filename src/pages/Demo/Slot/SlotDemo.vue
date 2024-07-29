<script setup lang="ts">
defineProps({
  data: { type: Array },
})

import { ref } from 'vue'

const items = ref(<any>[])

setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 },
  ]
}, 1000)
</script>

<template>
  <div>
    <div>slotDemo</div>
    <slot name="header" message="from child slot"></slot>
    <slot name="footer" :message="items[0]"></slot>
    <slot>123</slot>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

li {
  padding: 5px;

  background: #fff;
}
</style>
