<script setup>
import {ref} from 'vue';
import { defineEmits } from 'vue';

let messageInput = ref("hello");
let messageId = ref(1);

const emit = defineEmits(['set-message']);

const addTodo = () => {
  if (messageInput.value == null && messageInput.value == '') {
    return;
  }

  let todos = JSON.parse(localStorage.getItem('todos'));
  if (todos == null) {
    todos = [];
  }
  const id = new Date().getTime();
  todos.push(
    {
      id: id,
      message: messageInput.value,
      isActive: false
    }
  );
  localStorage.setItem("todos", JSON.stringify(todos));

  messageId.value = id;
  emit('set-message',messageInput, messageId);
};

</script>


<template>
  <div class="frame">
    <input type="text" v-model.lazy="messageInput" class="me-2">
    <button type="button" class="btn btn-primary btn-circle btn-sm" @click="addTodo">
      <font-awesome-icon icon="fa-solid fa-plus" beat-fade />
    </button>
  </div>
</template>

<style scoped>
  .frame {
    /* border: blue solid; */
    padding: 10px;
    margin-bottom: 10px;
  }
</style>