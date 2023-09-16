<script setup>
import { ref } from 'vue';

let message = ref("");
const show = () => {
  message.value = localStorage.getItem("message");
};


</script>


<template>
  <div>
    <button type="button" @click="show">Show</button>
    <ul>
      <li >{{ message }}</li>
    </ul>
  </div>
</template>

<style scoped>
  div {
    border: yellowgreen solid;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>