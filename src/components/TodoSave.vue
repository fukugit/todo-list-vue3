<script setup>
// import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  message:{
    type: String,
    requirerd: true,
  },
});

const displayMessage = computed(() => {
  if (props.message == '') {
    return props.message;
  }

  let messages = JSON.parse(localStorage.getItem('message'));
  if (messages == null) {
    messages = [];
  }
  messages.push(props.message);
  localStorage.setItem("message", JSON.stringify(messages));

  messages = messages.filter(function(x){
    return !(x === null || x === undefined || x === ""); 
  });

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