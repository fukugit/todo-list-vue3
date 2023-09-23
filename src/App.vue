<template>
  <TodoHeader></TodoHeader>
  <!-- emit -->
  <TodoInput @set-message="setMessage"></TodoInput>
  <!-- props -->
  <TodoSave :message="message"></TodoSave>
  <!-- props -->
  <TodoList :message="message" :allMessageRemovedFlag="allMessageRemovedFlag"></TodoList>
  <!-- emit -->
  <TodoRemove @all-message-removed="setAllMessageReemoved"></TodoRemove>


</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoSave from "./components/TodoSave.vue";
import TodoList from "./components/TodoList.vue";
import TodoRemove from "./components/TodoRemove.vue";


export default {
  data() {
    return {
      message: "",
      allMessageRemovedFlag: false,
    }
  },
  components: {
    TodoHeader:TodoHeader,
    TodoInput:TodoInput,
    TodoSave:TodoSave,
    TodoList:TodoList,
    TodoRemove:TodoRemove,
  },
  methods: {
    setMessage(value) {
      this.message = value.value;
      this.allMessageRemovedFlag = false;
    },
    setAllMessageReemoved() {
      this.allMessageRemovedFlag = true;
    }
  }
}
</script>

<style>
</style>
