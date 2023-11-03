<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['set-message']);

const deleteTodoList = () => {
  localStorage.removeItem("message");
  emit('all-message-removed');
};

</script>

<template>
  <button type="button" class="btn btn-primary mr-1 mb-1" @click="deleteTodoList">Delete All</button>
</template>


<style scoped>
</style>
