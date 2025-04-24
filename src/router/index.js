import { createRouter, createWebHistory } from 'vue-router'
import { generateRoutes } from '@/utils/routeUtils'

const generatedRoutes = generateRoutes({ includeComponent: true })

const routes = [
  // Explicit home route
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  // Alternative home route
  {
    path: '/home',
    redirect: '/'
  },
  ...generatedRoutes,
  // Catch-all route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 