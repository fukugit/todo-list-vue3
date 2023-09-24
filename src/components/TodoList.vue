<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { computed } from 'vue';

let oldMessages = ref([]);

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

const isDispay = computed(() => {
  if (props.isRemovedFlag == true)  {
    oldMessages = JSON.parse(localStorage.getItem('message'));
    return false;
  }
  return true;
});

</script>


<template>
  <div>
    <ul class="red" v-if="displayNewMessage != ''">
      <li >Your latest input : {{ displayNewMessage }}</li>
    </ul>
    <div v-if="isDispay === true" class="li">
      <ul v-for="oldMessage in oldMessages" :key="oldMessage">
        <li >{{ oldMessage }}</li>
      </ul>
    </div>
    <div v-else-if="isDispay === false" class="li">
      <ul v-for="oldMessage in displayOldMessage" :key="oldMessage">
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
</style>