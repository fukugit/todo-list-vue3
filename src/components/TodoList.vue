<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { defineExpose } from 'vue';
import { useToast } from 'bootstrap-vue-next';
const {show} = useToast()

let messages = ref([])
let currents = JSON.parse(localStorage.getItem('message'));
messages.value.slice(0, currents.length);
if (currents != null) {
  // sort by id with descending order
  currents.sort((a,b) =>   b.id - a.id);
}
messages.value = currents;


const deletes = ref([])
const isAllDeleted = ref(false);
const checkedFlg = ref(false)

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
  if (messages.value == null) {
    messages.value = [];
  }

  let currents = JSON.parse(localStorage.getItem('message'));
  messages.value.slice(0, currents.length);
  if (currents != null) {
    // sort by id with descending order
    currents.sort((a,b) =>   b.id - a.id);
  }
  messages.value = currents;
};
defineExpose({
  showTodoList,
});

const deleteTodo = (id) => {
  let currents = JSON.parse(localStorage.getItem('message'));
  currents.forEach((message, index) =>{
    if (message.id == id) {
      currents.splice(index, 1);
    }
  });
  localStorage.setItem("message", JSON.stringify(currents));
  showTodoList();
  show('Deleted!', {pos: 'top-center', delay: 100, value: 1000})
};

const markDone = (id) => {
  let currents = JSON.parse(localStorage.getItem('message'));
  currents.forEach((message) =>{
    if (message.id == id) {
      message.isActive = !message.isActive;
    }
  });
  localStorage.setItem("message", JSON.stringify(currents));
  showTodoList();
};


const checkAllTodos = () => {
  checkedFlg.value = !checkedFlg.value
  if (checkedFlg.value) {
    const currents = JSON.parse(localStorage.getItem('message'));
    currents.forEach((message) =>{
      deletes.value.push(message.id)
    });
  } else {
    deletes.value = []
  }
};


let all_message = JSON.parse(localStorage.getItem('message'));

const deleteTodos = () => {
  if (deletes.value.length == all_message.length) {
    isAllDeleted.value = true;
  }
  deletes.value.forEach((delId) => {
    let currents = JSON.parse(localStorage.getItem('message'));
    currents.forEach((message, index) =>{
      if (message.id == delId) {
        currents.splice(index, 1);
      }
    });
    localStorage.setItem("message", JSON.stringify(currents));
  })
  if (!isAllDeleted.value) {
    showTodoList();
  } else {
    const currents = JSON.parse(localStorage.getItem('message'));
    messages.value = currents;
  }
};

</script>


<template>
  <BToaster />
  <div class="li">
    <ToastFeature
      ref="toast"
    />
    <div>
      <button type="button" class="btn btn-primary me-1 mb-1" @click="checkAllTodos()">Select All</button>
      <button type="button" class="btn btn-primary me-1 mb-1" @click="deleteTodos()">Delete</button>
      <transition name="fade">
        <p v-if="isAllDeleted">
          All TODOs were removed!
        </p>
      </transition>
      <ul v-for="(todo) in messages" :key="todo.id">
        <transition
          type="animation"
          enter-active-class="animate__animated animate__bounce"
          appear
        >
          <li v-if="todo.id == messageId" :id="todo.id">
            <input type="checkbox" :value="todo.id" v-model="deletes">
            <div class="message" :class="{'message-line': todo.isActive}">{{todo.message }}</div>
            <button type="button" class="btn btn-primary me-1" @click="markDone(todo.id)">Done</button>
            <button type="button" class="btn btn-primary" @click="deleteTodo(todo.id)">Delete</button>
          </li>
        </transition>

        <li v-if="todo.id != messageId" :id="todo.id">
          <input type="checkbox" :value="todo.id" v-model="deletes">
          <div class="message" :class="{'message-line': todo.isActive}">{{todo.message }}</div>
          <button type="button" class="btn btn-primary me-1" @click="markDone(todo.id)">Done</button>
          <button type="button" class="btn btn-primary" @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
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
  input[type=checkbox] {
    transform: scale(1.5);
  }
  .message {
    margin-left: 10px;
    margin-right: 10px;
    display: inline;
  }
  .message-line {
    text-decoration: line-through;
  }
</style>