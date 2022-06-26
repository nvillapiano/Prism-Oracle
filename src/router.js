import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Anger from './views/Anger.vue'
import Pain from './views/Pain.vue'


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/anger',
      name: 'anger',
      component: Anger,
    },
    {
      path: '/pain',
      name: 'pain',
      component: Pain,
    },
    // {
    //   path: '/wall-drawing-260-glossary',
    //   name: 'Wall Drawing 260 glossary',
    //   component: Project260Glossary,
    // },
    // {
    //   path: '/wall-drawing-370',
    //   name: 'Wall Drawing 370',
    //   component: WallDrawing370,
    // },
    // {
    //   path: '/wall-drawing-610',
    //   name: 'Wall Drawing 610',
    //   component: WallDrawing610,
    // },
    // {
    //   path: '/wall-drawing-1256',
    //   name: 'Wall Drawing 1256',
    //   component: WallDrawing1256,
    // },
  ],
});