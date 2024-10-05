<template>
  <div class="wrapper">
    <div class="container text-left">
      <div class="row mb-1">
        <div class="col-12">
          <TodoHeader></TodoHeader>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <!-- emit -->
          <TodoInput @set-message="setMessage"></TodoInput>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <!-- props -->
          <TodoList ref="todoListRef" :message="message" :messageId="id"></TodoList>
        </div>
      </div>
      <!-- <div class="row mb-1">
        <div class="col-12">
          <TodoFooter></TodoFooter>
        </div>
      </div> -->
    </div>
  </div><!-- /.wrapper -->
</template>

<script setup>
import { ref } from 'vue';

import TodoHeader from "./TodoHeader.vue";
import TodoInput from "./todo/TodoInput.vue";
import TodoList from "./todo/TodoList.vue";
// TODO The TodoFooter should be removed.
// import TodoFooter from "./TodoFooter.vue";

let message = ref("");
let id = ref(0);
// let isRemovedFlag = ref(false);
const todoListRef = ref();

const setMessage = (messageInput, messageId) => {
  if (messageInput == null) {
    return;
  }
  message.value = messageInput.value;
  id.value = messageId.value;
  // isRemovedFlag.value = false;
  showTodoList();
};

const showTodoList = () => {
    todoListRef.value.showTodoList();
};

</script>

<style>
</style>
