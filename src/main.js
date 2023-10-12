import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/style/common.css'
import 'animate.css';

const app = createApp(App);
app.directive("border", (el) => {
  el.style.border = "solid red 1px";
});

app.use(router).mount("#app");

