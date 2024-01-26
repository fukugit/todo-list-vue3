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
  <button type="button" class="btn btn-primary me-1 mb-1" @click="checkAllTodos()">Select All</button>
</template>

<style scoped>
</style>