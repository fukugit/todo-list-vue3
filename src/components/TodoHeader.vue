<template>
<div class="container text-left">
  <div class="row">
    <div class="col-4 pt-2">
      <div class="title">
        <router-link
          to="/"
          class="h1-link">
          <h1>Todo List</h1>
        </router-link>
      </div><!-- /.title -->
    </div>
    <div class="col-8 d-flex align-items-end">
      <!-- blank -->
    </div>
  </div>
</div>
</template>

<style scoped>

  .title {
    font-family: 'Unbounded Variable', sans-serif;
    /* background-color: red; */
    width: 400px;
  }
  .h1-link {
    text-decoration: none;
    color: black;
  }
</style>