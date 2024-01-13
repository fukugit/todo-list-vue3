<template>
  <footer>
    <BCardGroup deck>
      <BCard title="Project Note" img-alt="Image" img-top>
        <BCardText>
          <div class="container">
            <div class="row mb-2">
              <div class="col">
                <a href="https://github.com/fukugit/todo-list-vue3" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-github" class="fa-lg"/> Github
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://github.com/users/fukugit/projects/1" target="_blank">
                  <font-awesome-icon icon="fa-solid fa-clipboard-check" class="fa-lg me-2"/>  Issues
                </a>
              </div>
            </div>
          </div>
        </BCardText>
      </BCard>

      <BCard title="" img-alt="Image" img-top>
        <template #header>
          <small class="text-body-secondary">Acknowledgement</small>
        </template>
        <BCardText>
          This card has supporting text below as a natural lead-in to additional content.
        </BCardText>

      </BCard>

      <BCard title="Snippets for Vue3" img-alt="Image" img-top>
        <BCardText>
          <div class="container">
            <div class="row">
              <div class="col">
                <router-link
                  to="/sample">
                  <font-awesome-icon icon="fa-solid fa-code" class="me-2"/>Snippets
                </router-link>
              </div>
            </div>
          </div>
        </BCardText>
      </BCard>
    </BCardGroup>
  </footer>
</template>

<script>
// import {BCardGroup} from 'bootstrap-vue-next';

</script>

<style scoped>
  footer {
    border: rgb(72, 0, 255) solid;
    padding: 10px;
    margin-bottom: 10px;
  }
  a {
    color: lightcoral;
    text-decoration: none;
  }
</style>