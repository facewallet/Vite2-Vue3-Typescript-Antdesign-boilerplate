import { createRouter, createWebHistory } from 'vue-router'
import Index from "_PAGE_/index.vue";
import About from "_PAGE_/about.vue";

const routes = [
  {path: '/', component: Index, meta: {layout: 'default'}},
  {path: '/about', component: About, meta: {layout: 'admin'}}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router