<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  message:{
    type: String,
    requirerd: true,
  },
});

const displayMessage = computed(() => {
  localStorage.setItem("message", props.message);
  return props.message;
});
</script>


<template>
  <div>
    <p> {{ displayMessage }} </p>
  </div>
</template>

<style scoped>
  div {
    border: brown solid;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>