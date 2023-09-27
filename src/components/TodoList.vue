<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';
import { defineExpose } from 'vue';
import { annotate } from 'rough-notation';

const obj = ref({
  oldMessages: [],
})


const props = defineProps({
  message:{
    type: String,
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
  const annotation1 = annotate(el, { type: 'highlight', color: '#FFFF00', animationDuration: 800 });
  annotation1.show();
};

</script>


<template>
  <div class="li">
    <div>
      <ul class="red">
        <transition
          @after-enter="afterEnter"
        >
          <li v-if="displayNewMessage != ''">Your latest input : {{ displayNewMessage }}</li>
        </transition>
      </ul>
    </div>
    <div>
      <div v-for="(todoList, key) in obj" :key="key">
        <ul v-for="(todo) in todoList" :key="todo">
          <li >{{ todo }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
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