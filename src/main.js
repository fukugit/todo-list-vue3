import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/common.css'

const app = createApp(App);
app.mount("#app");

// // After 'app.mount' such as creating DOM, it is possible to use the below like operating real DOM.
// import { annotate } from 'rough-notation';
// const e1 = document.querySelector('#main-header');
// const annotation1 = annotate(e1, { type: 'box', color: '#FF6347', animationDuration: 200 });
// annotation1.show();
