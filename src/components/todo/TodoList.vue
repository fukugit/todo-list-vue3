<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { defineExpose } from 'vue';
import { useToast } from 'bootstrap-vue-next';
import DeleteButton from './parts/DeleteButton.vue';
import DoneButton from './parts/DoneButton.vue';
import DeleteAllButton from './parts/DeleteAllButton.vue';
import AllSelectButton from './parts/AllSelectButton.vue';
import { annotate } from 'rough-notation';

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
  show('Deleted!', {variant: 'info', pos: 'top-center', delay: 50, value: 1000})
  showTodoList()
}


// transition
const beforeEnter = () => {
}
const enter = () => {
}
const afterEnter = (el) => {
  // rough-notation
  const annotation1 = annotate(el, { type: 'box', color: '#db7093', animationDuration: 50 })
  annotation1.show()
}
const enterCanceled = () => {
}
const beforeLeave = () => {
}
const leave = (el) => {
  const annotation1 = annotate(el, { animationDuration: 0 })
  annotation1.hide()
}
const afterLeave = () => {
}
const leaveCanceled = () => {
}
</script>


<template>
  <BToaster />
  <div class="frame">
    <AllSelectButton @show-delete-todo-list="showDeleteTodoList"></AllSelectButton>
    <DeleteAllButton @show-todo-list="showTodoList" :messageIds="deletes"></DeleteAllButton>
  </div>
  <div class="frame">
    <ToastFeature
      ref="toast"
    />
    <div>
      <transition name="fade">
        <p v-if="isAllDeleted">
          All removed!
        </p>
      </transition>
      <ul v-for="(todo) in todos" :key="todo.id">
          <li :id="todo.id">
            <div class="row">
              <div class="col-8 message_bg">
                <input type="checkbox" :value="todo.id" v-model="deletes">
                <!--
                  Animate.css
                  rough-notation
                -->
                <transition
                  type="animation"
                  enter-active-class="animate__animated animate__bounce"
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-canceled="enterCanceled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-canceled="leaveCanceled"
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
              </div>
              <div class="col-1 me-1">
                <DoneButton @show-todo-list="showTodoList" :messageId="todo.id"></DoneButton>
              </div>
              <div class="col-1">
                <DeleteButton @show-toast="showToast" :messageId="todo.id"></DeleteButton>
              </div>
            </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  .frame {
    border: rgba(127, 131, 120, 0.211) solid;
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
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
  }
  .message_bg {
    background-color: rgb(230, 234, 234);
  }
  .message-line {
    background-color: gray;
    text-decoration: line-through;
  }
</style>