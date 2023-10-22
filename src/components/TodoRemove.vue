<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['set-message']);
const isDeleted = ref(false);

const deleteTodoList = () => {
  localStorage.removeItem("message");
  isDeleted.value = true;
  emit('all-message-removed');
};

</script>

<template>
  <div class="frame">
    <button type="button" class="btn btn-primary" @click="deleteTodoList">Delete All</button>
    <transition name="fade">
      <p v-if="isDeleted">All TODOs were removed!</p>
    </transition>
  </div>
</template>


<style scoped>
  .frame {
    border: lightcoral solid;
    padding: 10px;
    margin-bottom: 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
