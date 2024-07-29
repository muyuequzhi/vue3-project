<script setup>
const list = [1, 2, 3, 4, 5]

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev) {
  ev.preventDefault()
  var data = ev.dataTransfer.getData('text')
  console.log(ev.target)
  ev.target.parentNode.insertBefore(ev.target, document.getElementById(data))
}
function dropSpan(event) {
  event.stopPropagation()
}
</script>

<template>
  <div>
    <ul>
      <li ondrop="drop(event)" :id="item" draggable="true" @ondragstart="drag(event)" v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style: none;
  width: 300px;
  display: inline-block;
}

li {
  background-color: #ebedf0;
  padding: 5px;
  margin: 10px;
}
</style>
