import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/style/common.css'
import 'animate.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.directive("border", (el) => {
  el.style.border = "solid red 1px";
});

app.use(router).use(BootstrapVue).use(IconsPlugin).mount("#app");

