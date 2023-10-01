<template>
  <div class="wrapper">
    <header>
      <TodoHeader></TodoHeader>
    </header>
    <div class="main">
      <article>
        <!-- emit -->
        <TodoInput @set-message="setMessage"></TodoInput>
        <!-- emit -->
        <TodoRemove @all-message-removed="setAllMessageReemoved"></TodoRemove>
      </article>
      <aside>
        <!-- props -->
        <TodoList ref="todoListRef" :message="message" :isRemovedFlag="isRemovedFlag"></TodoList>
      </aside>
    </div>
    <TodoFooter></TodoFooter>

    <AnimeSamples></AnimeSamples>
  </div><!-- /.wrapper -->
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
.main {
  display: flex;
  justify-content: space-between;
  min-height: 600px;
}
header {
  margin-bottom: 10px;
}
article {
  width: 40%;
}
aside {
  width: 55%;
}
</style>
