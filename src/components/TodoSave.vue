<script setup>
import { defineProps } from 'vue';
// import { onBeforeMount } from 'vue';

const props = defineProps({
  message:{
    type: String,
    requirerd: true,
  },
});

const save = () => {
  localStorage.setItem("message", props.message);
  
};


</script>


<template>
  <div>
    <button type="button" @click="save">Add</button>
    <p>This vue template doesn't need 'template'. So, this will be remoded later. </p>
  </div>
</template>

<style scoped>
  div {
    border: brown solid;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>