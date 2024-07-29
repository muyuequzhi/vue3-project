<script setup>
import SlotDemo from './SlotDemo.vue'
</script>

<template>
  <div>
    <SlotDemo #header="msg">
      <div>{{ msg }}</div>
      <div>parent text</div>
    </SlotDemo>
  </div>
</template>
