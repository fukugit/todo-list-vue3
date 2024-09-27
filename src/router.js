import {createRouter, createWebHashHistory} from "vue-router";
import MainView from './components/MainView.vue';
import SampleCode from './components/snippets/SampleCode.vue';

const routes = [
  {path: '/', component: MainView},
  {path: '/sample', component: SampleCode},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;