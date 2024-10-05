<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';

defineProps({
  messageIds:{
    type: Array,
    required: true, 
    default: () => []
  },
});

const emit = defineEmits(['show-todo-list']);

const deleteTodos = (ids) => {
  let currents = JSON.parse(localStorage.getItem('todos'));
  const isAllDeleted  = currents.length == ids.length

  ids.forEach((delId) => {
    currents.forEach((todo, index) =>{
      if (todo.id == delId) {
        currents.splice(index, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify(currents));
  })
  emit('show-todo-list', isAllDeleted);
}
</script>


<template>
  <!-- <button type="button" class="btn btn-secondary me-1 mb-1" @click="deleteTodos(messageIds)">Delete</button> -->
  <button type="button" class="btn btn-secondary me-1 mb-1" @click="deleteTodos(messageIds)">
      <font-awesome-icon icon="fa-solid fa-delete-left"/>
  </button>
</template>

<style scoped>
  button  {
    border: none;
    background-color: aliceblue;
  }
</style>