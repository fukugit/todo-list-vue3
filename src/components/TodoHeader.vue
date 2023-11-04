<template>
<div class="container text-left">
  <div class="row">
    <div class="col-6 pt-2">
      <div class="title">
        <router-link
          to="/"
          class="h1-link">
          <h1 class="animate__animated animate__bounce">This is Header</h1>
        </router-link>
      </div><!-- /.title -->
    </div>
    <div class="col-6">
      <div class="sub">
        <a class="sub-link" href="https://github.com/fukugit/todo-list-vue3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a class="sub-link" href="https://github.com/users/fukugit/projects/1" target="_blank">
          <font-awesome-icon icon="fa-solid fa-clipboard-check" />
        </a>
        <router-link
          to="/sample"
          class="sub-link">
          <font-awesome-icon icon="fa-solid fa-code" />
        </router-link>
      </div><!-- /.sub -->
    </div>
  </div>
</div>
</template>

<style scoped>

  .title {
    /* background-color: red; */
    width: 400px;
  }
  .sub {
    margin-top: 50px;
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  .h1-link {
    text-decoration: none;
    color: black;
  }
  .sub-link {
    display: block;
    text-decoration: none;
    color: blueviolet;
  }
</style>