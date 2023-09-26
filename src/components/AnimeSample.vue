<script setup>
import {ref} from 'vue';
import { annotate } from 'rough-notation';

const show = ref(false);

const beforeEnter = () => {
};
const enter = () => {
};
const afterEnter = (el) => {
  const annotation1 = annotate(el, { type: 'highlight', color: '#FFFF00', animationDuration: 100 });
  annotation1.show();
};
const enterCanceled = () => {
};
const beforeLeave = () => {
};
const leave = () => {
};
const afterLeave = () => {
};
const leaveCanceled = () => {
};
</script>


<template>
  <div>
    <button @click="show = !show">Show</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-canceled="enterCanceled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-canceled="leaveCanceled"
    >
      <div class="circle" v-if="show"></div>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  div {
    border: rgb(205, 50, 179) solid;
    padding: 10px;
    margin-bottom: 10px;
  }

  .circle { 
    width: 200px;
    height: 200px;
    background-color: pink;
    border-radius: 100px;
  }
</style>