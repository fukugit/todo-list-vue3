import {createRouter, createWebHistory} from "vue-router";
import HomeView from './components/view/HomeView.vue';
import SampleCode from './components/view/SampleCode.vue';

const routes = [
  {path: '/', component: HomeView},
  {path: '/sample', component: SampleCode},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;