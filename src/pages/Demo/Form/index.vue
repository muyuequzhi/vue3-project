<script setup lang="ts">
import { ref } from 'vue'

const formVal = ref({
  name: '',
})
const nameV = (rule: any, value: any, callback: any) => {
  if (value == '666') {
    callback(new Error('666'))
  } else if (value == '888') {
    callback(new Error('888'))
  } else {
    callback()
  }
}
const rules = ref({
  name: [
    { required: true, message: 'require', trigger: 'blur' },
    { validator: nameV, trigger: 'blur' },
  ],
})
</script>

<template>
  <div>
    <el-form :model="formVal" :rules="rules" label-width="auto">
      <el-form-item label="label" prop="name">
        <el-input v-model="formVal.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
