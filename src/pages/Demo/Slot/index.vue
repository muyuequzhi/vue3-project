<script setup>
import SlotDemo from './SlotDemo.vue'
</script>

<template>
  <div>
    <SlotDemo #header="msg">
      <div>{{ msg }}</div>
      <div v-if="false">parent text</div>
      <div>111</div>
    </SlotDemo>
    <SlotDemo>
      default
    </SlotDemo>
  </div>
</template>
