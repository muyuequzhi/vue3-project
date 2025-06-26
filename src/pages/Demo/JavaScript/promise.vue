<script setup>
import { onMounted } from 'vue'
import { getUserInfo, getSystemData, getCompanyData } from '@/request/api.ts'

async function updateUserInfo() {
  const res = await getUserInfo()
  const userData = res.data
  console.log(userData.name)
  const res1 = await getSystemData()
  const systemData = res1.data
  console.log(systemData.name)
  const res2 = await getCompanyData()
  const companyData = res2.data
  console.log(companyData?.name)



  console.log(111)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
const newSleep = ms => new Promise(r => setTimeout(r, ms))
async function sleepDemo() {
  for (let i = 1; i < 6; i++) {
    // await sleep(i * 1000)
    await newSleep(i * 1000)
    console.log(`${i * 1000} ms`)
  }
}
sleepDemo()
onMounted(() => {
  updateUserInfo()
  getUserInfo().then((res) => console.log(res))
})




</script>

<template>
  <div>Promise</div>
</template>