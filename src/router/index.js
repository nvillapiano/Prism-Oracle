import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
  // Add your other routes here
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 