<template>
  <TodoHeader></TodoHeader>
  <!-- emit -->
  <TodoInput @set-message="setMessage"></TodoInput>
  <!-- props -->
  <TodoList ref="todoListRef" :message="message" :isRemovedFlag="isRemovedFlag"></TodoList>
  <!-- emit -->
  <TodoRemove @all-message-removed="setAllMessageReemoved"></TodoRemove>

  <TodoFooter></TodoFooter>

  <AnimeSamples></AnimeSamples>

</template>

<script setup>
import { ref } from 'vue';

import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoRemove from "./components/TodoRemove.vue";
import TodoFooter from "./components/TodoFooter.vue";
import AnimeSamples from "./components/AnimeSample.vue";

let message = ref("");
let isRemovedFlag = ref(false);
const todoListRef = ref();

const setMessage = (value) => {
  if (value == null) {
    return;
  }
  message.value = value.value;
  isRemovedFlag.value = false;
  showTodoList();
};

const setAllMessageReemoved = () => {
  isRemovedFlag.value = true;
  showTodoList();
}

const showTodoList = () => {
    todoListRef.value.showTodoList();
};

</script>

<style>
</style>
