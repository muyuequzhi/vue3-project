<script setup lang="ts">

const props = defineProps({
  list: {
    type: Array,
    default: [{ name: '近12个月', value: '1' }, { name: '近3年', value: '2' }]
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
  display: flex;
}

.tab-box>span {
  font-size: 12px;
}

.tab-box>span:first-child {
  position: relative;
  margin-right: 12px;
}

.tab-box>span:first-child::after {
  content: '';
  position: absolute;
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #E8EAFD;
  border-radius: 1px;
  top: 7px;
  right: -6px;
}

.tab-actived {
  color: #6679E5;
}
</style>