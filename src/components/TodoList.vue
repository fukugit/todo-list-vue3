<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';

let oldMessage = ref("aaa");

const props = defineProps({
  message:{
    type: String,
    requirerd: true,
  },
});

const displayNewMessage = computed(() => {
  oldMessage = "bbbb";
  return props.message;
});


</script>


<template>
  <div>
    <ul v-if="displayNewMessage != ''">
      <li >{{ displayNewMessage }}</li>
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
</style>