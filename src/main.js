import { createApp } from 'vue'
import App from './App.vue'
// import LikeNumber from './components/LikeNumber.vue'


const app = createApp(App);

// app.component("LikeNumber", LikeNumber); // global registration - can be used anywhere

app.mount("#app");