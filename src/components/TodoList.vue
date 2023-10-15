<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { defineExpose } from 'vue';

const obj = ref({
  oldMessages: [],
})
obj.value.oldMessages = JSON.parse(localStorage.getItem('message'));

defineProps({
  message:{
    type: String,
    requirerd: true,
  },
  messageId:{
    type: Number,
    requirerd: true,
  },
  isRemovedFlag: {
    type: Boolean,
    default: false,
    requirerd: false,
  }
});

const showTodoList = () => {
  if (obj.value.oldMessages == null) {
    obj.value.oldMessages = [];
  }
  let messages = JSON.parse(localStorage.getItem('message'));
  obj.value.oldMessages.slice(0, obj.value.oldMessages.length);
  if (messages != null) {
    // sort by id with descending order
    messages.sort((a,b) =>  b.id - a.id);
  }
  obj.value.oldMessages = messages;
};
defineExpose({
  showTodoList,
});

const deleteTodo = (id) => {
  let messages = JSON.parse(localStorage.getItem('message'));
  messages.forEach((message, index) =>{
    if (message.id == id) {
      messages.splice(index, 1);
    }
  });
  localStorage.setItem("message", JSON.stringify(messages));
  showTodoList();
};

</script>


<template>
  <div class="li">
    <div>
      <div class="button">Selete All</div>
      <div class="button">Delete</div>
      <div v-for="(todoList, key) in obj" :key="key">
        <ul v-for="(todo) in todoList" :key="todo.id">
          <transition
            type="animation"
            enter-active-class="animate__animated animate__bounce"
            appear
          >
            <li v-if="todo.id == messageId" id="{{todo.id}}">
              <input type="checkbox">
              {{todo.message }}
              <div class="button">Done</div>
              <div class="button" @click="deleteTodo(todo.id)">Delete</div>
            </li>
          </transition>

          <li v-if="todo.id != messageId" id="{{todo.id}}">
            <input type="checkbox">
            {{todo.message }}
            <div class="button">Done</div>
            <div class="button" @click="deleteTodo(todo.id)">Delete</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  .li {
    border: yellowgreen solid;
    padding: 10px;
    margin-bottom: 10px;
  }
  .red {
    color: red;
  }
  #currentInput {
    display: block;
    width: 500px;
  }
</style>