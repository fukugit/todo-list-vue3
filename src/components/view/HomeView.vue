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
        <TodoList ref="todoListRef" :message="message" :messageId="id" :isRemovedFlag="isRemovedFlag"></TodoList>
      </aside>
    </div>
    <TodoFooter></TodoFooter>
  </div><!-- /.wrapper -->
</template>

<script setup>
import { ref } from 'vue';

import TodoHeader from "../TodoHeader.vue";
import TodoInput from "../TodoInput.vue";
import TodoList from "../TodoList.vue";
import TodoRemove from "../TodoRemove.vue";
import TodoFooter from "../TodoFooter.vue";

let message = ref("");
let id = ref(0);
let isRemovedFlag = ref(false);
const todoListRef = ref();

const setMessage = (messageInput, messageId) => {
  if (messageInput == null) {
    return;
  }
  message.value = messageInput.value;
  id.value = messageId.value;
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
