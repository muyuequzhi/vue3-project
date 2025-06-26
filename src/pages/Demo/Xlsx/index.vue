<script setup lang="ts">
import { ref, onMounted } from 'vue'
// XLSX is a global from the standalone script
import xlsx from 'xlsx'
import { read, utils, writeFile } from 'xlsx'
import Table from '@/pages/Demo/Table/index.vue'


// async function handleFileAsync(e) {
//   const file = e.target.files[0];
//   const data = await file.arrayBuffer();
//   /* data is an ArrayBuffer */
//   const workbook = xlsx.read(data);
//   var sheets = workbook.Sheets
//   var sheetNames = workbook.SheetNames
//   sheetNames.forEach((ele) => {
//     console.log(sheets[ele])
//   })


// }
interface President {
  Name: string;
  Index: number;
}
const pres = ref<any>([]);
const tableData1 = ref<any>([])
const html = ref('')
const htmlRef = ref()

async function handleFileAsync(e) {
  const file = e.target.files[0];
  const fileData = await file.arrayBuffer();
  /* data is an ArrayBuffer */
  const wb = read(fileData);

  /* generate array of presidents from the first worksheet */
  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  const data = utils.sheet_to_json(ws); // generate objects
  const data1 = utils.sheet_to_json(ws, { header: 1 }); // generate objects
  tableData1.value = data1
  console.log(data1, 666)
  html.value = utils.sheet_to_html(ws, { editable: true });


  /* update state */
  pres.value = data;
  console.log(pres.value)
}
onMounted(() => {
})
let a = {
  "Name": "的",
  "Index": "都",
  "Index1": "都",
  "Index2": "都",
}
const tableColumnProps = [
  {
    label: ''
  }
]


</script>
<template>
  <div>
    <!-- <div id="drop_dom_element">Drop files here</div> -->
    xlsx
    <input type="file" @change="handleFileAsync" id="input_dom_element">

    <table v-if="pres.length > 0">
      <thead>
        <tr>
          <th v-for="key in Object.keys(pres[0])">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pres">
          <td v-for="key in Object.keys(item)">
            {{ item[key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <table v-if="pres.length > 0">
      <thead>
        <tr>
          <th v-for="item in tableData1[0]">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in tableData1">
          <tr v-if="index > 0">
            <td v-for="val in item">
              {{ val }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <!-- <div v-html="html"></div> -->

  </div>
</template>