import { createRouter, createWebHistory } from 'vue-router';
import { generateRoutes } from '@/utils/routeUtils';

// Generate routes from view files
const routes = generateRoutes();

// Add additional /home route
routes.push({
  path: '/home',
  name: 'home-alt',
  component: () => import('@/views/HomeView.vue')
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;