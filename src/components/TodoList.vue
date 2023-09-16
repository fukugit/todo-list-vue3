<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';

// let oldMessage = ref("aaa");
let oldMessages = ref([]);

const props = defineProps({
  message:{
    type: String,
    requirerd: true,
  },
});

const displayNewMessage = computed(() => {
  oldMessages = JSON.parse(localStorage.getItem('message'));
  return props.message;
});


</script>


<template>
  <div>
    <ul class="red" v-if="displayNewMessage != ''">
      <li >Your latest input : {{ displayNewMessage }}</li>
    </ul>
    <ul v-for="oldMessage in oldMessages" :key="oldMessage">
      <li >{{ oldMessage }}</li>
    </ul>

  </div>
</template>

<style scoped>
  div {
    border: yellowgreen solid;
    padding: 10px;
    margin-bottom: 10px;
  }
  .red {
    color: red;
  }
</style>