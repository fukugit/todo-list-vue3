<template>
<div class="container text-left">
  <div class="row">
    <div class="col-7 pt-2">
      <div class="title">
        <router-link
          to="/"
          class="h1-link">
          <h1>ToDo</h1>
        </router-link>
      </div><!-- /.title -->
    </div>
    <div class="col-4 d-flex align-items-end">
      <div class="sub-title">This project is built with Vue3.</div>
    </div>
  </div>
</div>
</template>

<style scoped>

  h1 {
    color: rgb(90, 88, 88);
  }
  .title {
    font-family: 'Unbounded Variable', sans-serif;
    /* background-color: red; */
    width: 400px;
  }
  .h1-link {
    text-decoration: none;
    color: black;
  }
  .sub-title {
    color: rgb(168, 169, 169);
  }
</style>