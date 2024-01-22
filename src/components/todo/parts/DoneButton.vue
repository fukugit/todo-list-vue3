<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';

defineProps({
  messageId:{
    type: Number,
    requirerd: true,
  },
});

const emit = defineEmits(['show-todo-list']);

const markDone = (id) => {
  let currents = JSON.parse(localStorage.getItem('todos'));
  currents.forEach((todo) =>{
    if (todo.id == id) {
      todo.isActive = !todo.isActive;
    }
  });
  localStorage.setItem("todos", JSON.stringify(currents));
  emit('show-todo-list');
};
</script>


<template>
  <button type="button" class="btn btn-primary me-1" @click="markDone(messageId)">Done</button>
</template>

<style scoped>
</style>