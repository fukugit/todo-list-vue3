<script setup>
import {ref} from 'vue';
import { computed } from 'vue';
import { defineEmits } from 'vue';

let messageInput = ref("hello");
let messageOutput = ref("");

const emit = defineEmits(['set-message']);

const addTodo = () => {
  messageOutput.value = messageInput.value;
  emit('set-message', messageInput);
};

const displayMessage = computed(() => {
  return messageOutput.value;
});

</script>


<template>
  <div>
    <input type="text" v-model.lazy="messageInput"><p>Your input : {{ displayMessage }}</p>
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