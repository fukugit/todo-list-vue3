<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';
import { defineExpose } from 'vue';
import { annotate } from 'rough-notation';

<<<<<<< HEAD
const obj = ref({
  oldMessages: [],
})
//});
//obj.value.oldMessages = JSON.parse(localStorage.getItem('message'));
=======
let oldMessages = ref([]);
>>>>>>> parent of beac20d (Modify TODO List as displaying todo at all time)

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
  oldMessages = JSON.parse(localStorage.getItem('message'));
  return props.message;
});

const showTodoList = () => {
  oldMessages = JSON.parse(localStorage.getItem('message'));
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
      <ul v-for="oldMessage in oldMessages" :key="oldMessage">
        <li >{{ oldMessage }}</li>
      </ul>
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