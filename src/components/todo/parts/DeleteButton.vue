<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';

defineProps({
  messageId:{
    type: Number,
    requirerd: true,
  },
});

const emit = defineEmits(['show-toast']);

const deleteTodo = (id) => {
  let currents = JSON.parse(localStorage.getItem('todos'));
  currents.forEach((todo, index) =>{
    if (todo.id == id) {
      currents.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(currents));
  emit('show-toast');
};
</script>


<template>
  <!-- <button type="button" class="btn btn-secondary me-1" @click="deleteTodo(messageId)">Delete</button> -->
  <button type="button" class="btn btn-secondary" @click="deleteTodo(messageId)">
      <font-awesome-icon icon="fa-solid fa-delete-left"/>
  </button>
</template>

<style scoped>
  button  {
    border: none;
    background-color: aliceblue;
  }
</style>