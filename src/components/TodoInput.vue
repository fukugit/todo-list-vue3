<script setup>
import {ref} from 'vue';
import { defineEmits } from 'vue';

let messageInput = ref("hello");

const emit = defineEmits(['set-message']);

const addTodo = () => {
  if (messageInput.value == null && messageInput.value == '') {
    return;
  }

  let messages = JSON.parse(localStorage.getItem('message'));
  if (messages == null) {
    messages = [];
  }
  messages.push(messageInput.value);
  localStorage.setItem("message", JSON.stringify(messages));

  emit('set-message', messageInput);
};

</script>


<template>
  <div>
    <input type="text" v-model.lazy="messageInput"><p>Your input : {{ messageInput }}</p>
    <button type="button" @click="addTodo">Add</button>
  </div>
</template>

<style scoped>
  div {
    border: blue solid;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>