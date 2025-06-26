<script setup lang="ts">

// list:[{name:'存款趋势', value:'1'}, {name:'',value:'2'}]
const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])


</script>
<template>
  <div class="tab-box">
    <template v-for="item in list">
      <span @click="emit('update:modelValue', item.value)" :class="modelValue == item.value ? 'tab-actived' : ''"
        class="tab-item">
        {{ item.name }}
      </span>
    </template>

  </div>
</template>

<style scoped>
.tab-box {
  border-radius: 13px;
  border: 2px solid #f4f6fd;
  display: inline-flex;
}

.tab-box>span {
  display: inline-block;
  padding: 0 12px;
  line-height: 24px;
}

.tab-actived {
  color: #6679e5;
  background: #e8eafd;
  border-radius: 12px;
}
</style>