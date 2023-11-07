<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { defineExpose } from 'vue';
import TodoRemove from "./TodoRemove.vue";
import ToastFeature from "./ToastFeature.vue"

const obj = ref({
  oldMessages: [],
})
obj.value.oldMessages = JSON.parse(localStorage.getItem('message'));

const deletes = ref([])
const isAllDeleted = ref(false);
const toast = ref(null)

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
  // Initialized
  isAllDeleted.value = false
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
  toast.value.makeToast()
};

const deleteTodos = () => {
  deletes.value.forEach((delId) => {
    let messages = JSON.parse(localStorage.getItem('message'));
    messages.forEach((message, index) =>{
      if (message.id == delId) {
        messages.splice(index, 1);
      }
    });
    localStorage.setItem("message", JSON.stringify(messages));
  })
  showTodoList();
};

const setAllMessageReemoved = () => {
  isAllDeleted.value = true;
  let messages = JSON.parse(localStorage.getItem('message'));
  obj.value.oldMessages = messages;
}
</script>


<template>
  <div class="li">
    <ToastFeature
      ref="toast"
    />
    <div>
      <!-- emit -->
      <TodoRemove class="" @all-message-removed="setAllMessageReemoved"></TodoRemove>
      <button type="button" class="btn btn-primary mr-1 mb-1" @click="deleteTodos()">Delete</button>
      <transition name="fade">
        <p v-if="isAllDeleted">
          All TODOs were removed!
        </p>
      </transition>
      <div v-for="(todoList, key) in obj" :key="key">
        <ul v-for="(todo) in todoList" :key="todo.id">
          <transition
            type="animation"
            enter-active-class="animate__animated animate__bounce"
            appear
          >
            <li v-if="todo.id == messageId" :id="todo.id">
              <input type="checkbox" :value="todo.id" v-model="deletes">
              {{todo.message }}
              <button type="button" class="btn btn-primary mr-1">Done</button>
              <button type="button" class="btn btn-primary" @click="deleteTodo(todo.id)">Delete</button>
            </li>
          </transition>

          <li v-if="todo.id != messageId" :id="todo.id">
            <input type="checkbox" :value="todo.id" v-model="deletes">
            {{todo.message }}
            <button type="button" class="btn btn-primary mr-1">Done</button>
            <button type="button" class="btn btn-primary" @click="deleteTodo(todo.id)">Delete</button>
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>