<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';
import { useToast } from 'bootstrap-vue-next';
const {show} = useToast()

defineProps({
  messageId:{
    type: Number,
    requirerd: true,
  },
});

const emit = defineEmits(['show-todo-list']);

const deleteTodo = (id) => {
  let currents = JSON.parse(localStorage.getItem('todos'));
  currents.forEach((todo, index) =>{
    if (todo.id == id) {
      currents.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(currents));
  show('Deleted!', {pos: 'top-center', delay: 100, value: 1000})
  emit('show-todo-list');
};
</script>


<template>
  <button type="button" class="btn btn-primary me-1" @click="deleteTodo(messageId)">Delete</button>
</template>

<style scoped>
</style>