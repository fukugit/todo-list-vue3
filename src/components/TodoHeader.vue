<template>
<div class="container text-left">
  <div class="row">
    <div class="col-3 pt-2">
      <div class="title">
        <router-link
          to="/"
          class="h1-link">
          <h1 class="animate__animated animate__bounce">TODO</h1>
        </router-link>
      </div><!-- /.title -->
    </div>
    <div class="col-9 d-flex align-items-end">
      <p>by Vue</p>
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