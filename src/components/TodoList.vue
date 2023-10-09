<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';
import { defineExpose } from 'vue';
import { annotate } from 'rough-notation';

const obj = ref({
  oldMessages: [],
})
obj.value.oldMessages = JSON.parse(localStorage.getItem('message'));

const props = defineProps({
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

let displayNewMessage = computed(() => {
  return props.message;
});

const showTodoList = () => {
  if (obj.value.oldMessages == null) {
    obj.value.oldMessages = [];
  }
  let messages = JSON.parse(localStorage.getItem('message'));
  obj.value.oldMessages.slice(0, obj.value.oldMessages.length);
  obj.value.oldMessages = messages;
};
defineExpose({
  showTodoList,
});

const afterEnter = (el) => {
  const annotation1 = annotate(el, { type: 'circle', color: '#B22222', animationDuration: 800 });
  annotation1.show();
};

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
      <ul class="red">
        <transition
          @after-enter="afterEnter"
        >
          <li v-if="displayNewMessage != ''">Your latest input : {{ displayNewMessage }} ID:{{props.messageId}}</li>
        </transition>
      </ul>
    </div>
    <div>
      <div v-for="(todoList, key) in obj" :key="key">
        <ul v-for="(todo) in todoList" :key="todo.id">
          <li id="{{todo.id}}"><input type="checkbox">
            {{todo.message }}
            <button type="button" @click="deleteTodo(todo.id)">Delete</button>
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