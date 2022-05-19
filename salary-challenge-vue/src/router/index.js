import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    name: 'List',
    path: '/list',
    component: () => import('../pages/List.vue')
  },
  {
    name: 'Form',
    path: '/form',
    component: () => import('../pages/Form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router