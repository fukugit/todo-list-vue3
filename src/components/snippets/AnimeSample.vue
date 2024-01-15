<script setup>
import {ref} from 'vue';
import { annotate } from 'rough-notation';

const isShowHello = ref(false);
const isShowHello2 = ref(false);
const isShowHi = ref(false);

const beforeEnter = () => {
};
const enter = () => {
};
const afterEnter = (el) => {
  const annotation1 = annotate(el, { type: 'underline', color: '#8B0000', animationDuration: 50 });
  annotation1.show();
};
const enterCanceled = () => {
};
const beforeLeave = () => {
};
const leave = (el) => {
  const annotation1 = annotate(el, { animationDuration: 0 });
  annotation1.hide();
};
const afterLeave = () => {
};
const leaveCanceled = () => {
};
</script>


<template>
  <div class="anime-main">
    <h2>How to use transition</h2>
    <div class="hello">
      <button @click="isShowHello = !isShowHello">Show Hello</button>
      <transition
        name="fade">
          <p v-if="isShowHello">hello</p>
      </transition>
    </div><!-- /.hello -->

    <div class="hello">
      <button @click="isShowHello2 = !isShowHello2">Show Hello</button>
      <transition
        enter-active-class="animate__animated animate__bounce"
        >
          <p v-if="isShowHello2">Animate.css</p>
      </transition>
    </div><!-- /.hello -->

    <div class="hi">
      <button @click="isShowHi = !isShowHi">Show Hi</button>
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
        <div v-if="isShowHi">before-enter</div>
      </transition>
    </div><!-- /.hi -->

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

  .anime-main {
    border: rgb(205, 50, 179) solid;
    padding: 10px;
    margin-bottom: 10px;
    min-height: 400px;
  }

  .hello, .hi {
    width: 200px;
    height: 100px;
  }

</style>