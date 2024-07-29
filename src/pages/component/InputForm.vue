<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput/index.vue'
import InputStyle from '@/components/BaseInput/InputStyle.vue'
import { useDragStore } from '@/stores/dragData.js'
import { parseObj } from '@/utils/function.js'

const valObj = ref({
  displayName: '',
  keyName: '',
  inputType: '',
})
const emit = defineEmits(['closeDrawer'])
const store = useDragStore()
function submit() {
  store.updateData(parseObj(valObj.value))
  emit('closeDrawer')
}
</script>
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <InputStyle label="输入类型">
          <el-select v-model="valObj.inputType">
            <el-option label="输入框" value="BaseInput"></el-option>
            <el-option label="选择框" value="BaseSelect"></el-option>
          </el-select>
        </InputStyle>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <BaseInput label="显示名称" v-model="valObj.displayName"></BaseInput>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <BaseInput label="字段名称" v-model="valObj.keyName"></BaseInput>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button @click="submit" type="primary">确认</el-button>
      </el-col>
    </el-row>
  </div>
</template>
