<template>
  <TodoHeader></TodoHeader>
  <!-- emit -->
  <TodoInput @set-message="setMessage"></TodoInput>
  <!-- props -->
  <TodoSave :message="message"></TodoSave>
  <!-- props -->
  <TodoList :message="message" :isRemovedFlag="isRemovedFlag"></TodoList>
  <!-- emit -->
  <TodoRemove @all-message-removed="setAllMessageReemoved"></TodoRemove>

  <TodoFooter></TodoFooter>


</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoSave from "./components/TodoSave.vue";
import TodoList from "./components/TodoList.vue";
import TodoRemove from "./components/TodoRemove.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      message: "",
      isRemovedFlag: false,
    }
  },
  components: {
    TodoHeader:TodoHeader,
    TodoInput:TodoInput,
    TodoSave:TodoSave,
    TodoList:TodoList,
    TodoRemove:TodoRemove,
    TodoFooter:TodoFooter,
  },
  methods: {
    setMessage(value) {
      this.message = value.value;
      this.isRemovedFlag = false;
    },
    setAllMessageReemoved() {
      this.isRemovedFlag = true;
    }
  }
}
</script>

<style>
</style>
