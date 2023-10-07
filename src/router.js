import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from './components/view/HomeView.vue';
import CustomDirective from './components/CustomDirective.vue';

const routes = [
  {path: '/', component: HomeView},
  {path: '/explain', component: CustomDirective},
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes,
});

export default router;