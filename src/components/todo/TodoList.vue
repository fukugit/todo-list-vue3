<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { defineExpose } from 'vue';
import { useToast } from 'bootstrap-vue-next';
import DeleteButton from './parts/DeleteButton.vue';
import DoneButton from './parts/DoneButton.vue';
import DeleteAllButton from './parts/DeleteAllButton.vue';
import AllSelectButton from './parts/AllSelectButton.vue';

const {show} = useToast()

let todos = ref([])
let currents = JSON.parse(localStorage.getItem('todos'));
if (currents == null) {
    currents = []
}
if (currents != null) {
  // sort by id with descending order
  currents.sort((a,b) =>   b.id - a.id);
}
todos.value = currents;


const deletes = ref([])
const isAllDeleted = ref(false);

defineProps({
  message:{
    type: String,
    requirerd: true,
  },
  messageId:{
    type: Number,
    requirerd: true,
  },
});

const showTodoList = (...args) => {
  isAllDeleted.value = args[0]
  let currents = JSON.parse(localStorage.getItem('todos'));
  if (currents == null) {
    currents = []
  } else  {
    // sort by id with descending order
    currents.sort((a,b) =>   b.id - a.id);
  }
  todos.value = currents;
}
defineExpose({
  showTodoList,
})

const showDeleteTodoList = (...args) => {
  deletes.value = args[0]
}

const showToast = () => {
  show('Deleted!', {pos: 'top-center', delay: 100, value: 1000})
  showTodoList()
}
</script>


<template>
  <BToaster />
  <div class="li">
    <ToastFeature
      ref="toast"
    />
    <div>
      <AllSelectButton @show-delete-todo-list="showDeleteTodoList"></AllSelectButton>
      <DeleteAllButton @show-todo-list="showTodoList" :messageIds="deletes"></DeleteAllButton>
      <transition name="fade">
        <p v-if="isAllDeleted">
          All TODOs were removed!
        </p>
      </transition>
      <ul v-for="(todo) in todos" :key="todo.id">
          <li :id="todo.id">
            <input type="checkbox" :value="todo.id" v-model="deletes">
            <transition
              type="animation"
              enter-active-class="animate__animated animate__bounce"
              appear
            >
              <div v-if="todo.id == messageId"
                class="message" 
                :class="{'message-line': todo.isActive}">
                {{todo.message }}
              </div>
           </transition>
            <div v-if="todo.id != messageId"
              class="message"
              :class="{'message-line': todo.isActive}">
              {{todo.message }}
            </div>
            <DoneButton @show-todo-list="showTodoList" :messageId="todo.id"></DoneButton>
            <DeleteButton @show-toast="showToast" :messageId="todo.id"></DeleteButton>
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
    display: inline-block;
  }
  .message-line {
    text-decoration: line-through;
  }
</style>