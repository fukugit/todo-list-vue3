<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const checkedFlg = ref(false)
const emit = defineEmits(['show-delete-todo-list']);

const checkAllTodos = () => {
  checkedFlg.value = !checkedFlg.value
  const deletes = []
  if (checkedFlg.value) {
    const currents = JSON.parse(localStorage.getItem('todos'))
    currents.forEach((todo) =>{
      deletes.push(todo.id)
    })
  }
  emit('show-delete-todo-list', deletes);
}
</script>


<template>
  <!-- <button type="button" class="btn btn-secondary me-1 mb-1" @click="checkAllTodos()">Select All</button> -->
  <button type="button" class="btn btn-secondary me-1 mb-1" @click="checkAllTodos()">
      <font-awesome-icon icon="fa-solid fa-check"/>
  </button>
</template>

<style scoped>
  button  {
    border: none;
    background-color: aliceblue;
  }
</style>