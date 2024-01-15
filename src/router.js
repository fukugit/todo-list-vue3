import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from './components/todo/HomeView.vue';
import SampleCode from './components/snippets/SampleCode.vue';

const routes = [
  {path: '/', component: HomeView},
  {path: '/sample', component: SampleCode},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;