<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  label: { type: String, required: true },
  val: { type: String },
})

// eslint-disable-next-line vue/no-setup-props-destructure
const inputVal = ref(props.val)
</script>

<template>
  <div class="item-input">
    <el-text class="mx-1">{{ label }}</el-text>
    <el-input v-model="inputVal" placeholder="Please input" />
  </div>
</template>

<style scoped>
.el-text {
  margin-right: 10px;
}

.el-input {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
}
</style>
