<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['set-message']);

const deleteTodoList = () => {
  localStorage.removeItem("message");
  emit('all-message-removed');
};

</script>

<template>
  <div>
    <button @click="deleteTodoList">Delete All</button>
  </div>
</template>


<style scoped>
  div {
    border: lightcoral solid;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
