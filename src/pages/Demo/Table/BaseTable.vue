<script setup lang="ts">
// interface data {
//   id: Number,
//   value: String
// }
// const props = defineProps<{ data: data[], tableColumnProps?: any[] }>()

import { ref } from 'vue'
const props = defineProps<{ data: any[]; tableColumnProps?: any[] }>()
const topVal = ref(0)
function handleScroll(e) {
  console.log(e.target.scrollTop)
  topVal.value = e.target.scrollTop
}

const tableHeader = ref(null)

const leftVal = ref(0)
function handleScrollLeft(e) {
  tableHeader.value.scrollLeft = e.target.scrollLeft
}
</script>

<template>
  <div style="margin: 16px">
    <h2>BaseTable</h2>
    <div>

      <!-- <table style="position: absolute;top: 0;z-index: 999;" :style="`top:${topVal + 'px'};`">
        <thead class="table-header">
          <tr>
            <th :class="index == 0 ? 'col1' : ''" v-for="(item, index) in tableColumnProps">
              {{ item.label }}
            </th>
          </tr>
        </thead>
      </table> -->
      <!-- <div class="table" style="position: relative;" @scroll="handleScroll">
        <table>
          <colgroup>
            <col v-for="(item, index) in tableColumnProps" style="width: 100px;">
          </colgroup>
          <thead class="table-header">
            <tr>
              <th :class="index == 0 ? 'col1' : ''" v-for="(item, index) in tableColumnProps">
                {{ item.label }}
              </th>
            </tr>
          </thead>
        </table>
        <table>
         
          <tbody>
            <tr v-for="item in data">
              <td :class="index == 0 ? 'col1' : ''" v-for="(propObj, index) in tableColumnProps">
                {{ item[propObj.prop] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->

      <!-- <div ref="tableHeader" class="table-header" style="position: relative;" @scroll="handleScroll">
        <table>
          <colgroup>
            <col v-for="(item, index) in tableColumnProps" style="width: 80px;">
          </colgroup>
          <thead class="table-header">
            <tr>
              <th :class="index == 0 ? 'col1' : ''" v-for="(item, index) in tableColumnProps">
                {{ item.label }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body" style="overflow-y: scroll;height: 100px;" @scroll="handleScrollLeft">
        <table>
          
          <col v-for="(item, index) in tableColumnProps" style="width: 80px;">

          <tbody>
            <tr v-for="item in data">
              <td :class="index == 0 ? 'col1' : ''" v-for="(propObj, index) in tableColumnProps">
                {{ item[propObj.prop] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->


      <div class="table">
        <table cellspacing="0" border="0" cellpadding="0">

          <thead>

            <tr>

              <th>表头1</th>

              <th>表头2</th>

              <th>表头3</th>

              <th>表头4</th>

              <th>表头5</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>
            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>
            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>
            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>
            <tr>

              <td>我的高度不固定我的高度不固定我的高度不固定我的高度不固定我的高度不固定我的高度不固定</td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>
            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>



            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>

            <tr>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

              <td></td>

            </tr>



          </tbody>

        </table>

      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  overflow: auto;
  width: 400px;
  height: 300px;
  /* 固定高度 */
  border: 1px solid #999;
  border-bottom: 0;
  border-right: 0;
}


table {
  border-collapse: separate;
  table-layout: fixed;
  width: 100%;
  /* 固定寬度 */
}


td,
th {
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  /* 单元格宽高 */
  width: 100px;
  height: 30px;
}

th {
  background-color: lightblue;
}


/* 控制左边固定的核心代码 */
td:nth-child(1),
th:nth-child(1) {
  position: sticky;
  left: 0;
  /* 首行在左 */
  z-index: 1;
  background-color: lightpink;
}

/* td:nth-child(2),
th:nth-child(2) {
  position: sticky;
  left: 100px;
  z-index: 1;
  background-color: lightpink;
} */

/* 控制表头固定的核心代码 */
thead tr th {
  position: sticky;
  top: 0;
  /* 第一列最上 */
}

th:nth-child(1) {
  z-index: 2;
  background-color: lightblue;
}

/* th:nth-child(1),
th:nth-child(2) {
  z-index: 2;
  background-color: lightblue;
} */
</style>
