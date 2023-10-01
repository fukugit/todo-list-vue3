<template>
  <div class="main-header">
    <div class="title">
      <h1>This is Header</h1>
    </div><!-- /.title -->
    <div class="sub">
      <a class="sub-link" href="https://github.com/fukugit/todo-list-vue3" target="_blank">Github</a>
      <a class="sub-link" href="https://github.com/users/fukugit/projects/1" target="_blank">Prject</a>
    </div><!-- /.sub -->
    
  </div>
</template>

<style scoped>
  .main-header {
    border: red solid;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 80px;
  }
  .title {
    /* background-color: red; */
    width: 400px;
  }
  .sub {
    margin-top: 50px;
    /* background-color: blue; */
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  .sub-link {
    display: block;
    text-decoration: none;
    color: blueviolet;
  }
</style>