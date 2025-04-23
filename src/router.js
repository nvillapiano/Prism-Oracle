import { createRouter, createWebHistory } from 'vue-router';

// Get all view components using webpack's require.context
const viewsContext = require.context('./views', false, /[A-Z]\w+View\.vue$/)

// Generate routes from view files
const routes = viewsContext.keys().map(filename => {
  // Extract name from filename (e.g., './HomeView.vue' -> 'home')
  const name = filename.match(/\.\/(\w+)View\.vue$/)[1].toLowerCase()
  
  return {
    // Handle home route specially
    path: name === 'home' ? '/' : `/${name}`,
    name,
    component: () => import(`@/views/${filename.slice(2)}`)
  }
})

// Add additional /home route
routes.push({
  path: '/home',
  name: 'home-alt',
  component: () => import('@/views/HomeView.vue')
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;