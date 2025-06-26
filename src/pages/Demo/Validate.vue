<script lang="ts" setup>
import Schema from 'async-validator';
import { ref, reactive, watch } from 'vue'
const inputObj = reactive({
  age: ''
})

const descriptor = {
  age: {
    required: true,
    type: 'number',
    message: 'age is required'
  },
};
const handleErrors = (errors, fields) => {
  console.error(errors, fields)
}
const validator = new Schema(descriptor);

watch(
  () => inputObj,
  (newVal) => {
    validator.validate(newVal)
      .then(() => {
        // validation passed or without error message
      }).catch(({ errors, fields }) => {
        return handleErrors(errors, fields);
      });
  },
  { deep: true })



</script>

<template>
  <div>

    <div>
      <span>age</span>
      <el-input v-model="inputObj.age"></el-input>
    </div>

  </div>
</template>
