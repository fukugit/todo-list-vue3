<template>
  <TodoHeader></TodoHeader>
  <!-- emit -->
  <TodoInput @set-message="setMessage"></TodoInput>
  <!-- props -->
  <TodoSave :message="message"></TodoSave>
  <TodoList></TodoList>


</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoSave from "./components/TodoSave.vue";
import TodoList from "./components/TodoList.vue";


export default {
  data() {
    return {
      message: "",
    }
  },
  components: {
    TodoHeader:TodoHeader,
    TodoInput:TodoInput,
    TodoSave:TodoSave,
    TodoList:TodoList,
  },
  methods: {
    setMessage(value) {
      this.message = value.value;
    }
  }
}
</script>

<style>
</style>
