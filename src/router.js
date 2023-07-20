import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Anger from './views/Anger.vue'
import Pain from './views/Pain.vue'
import Stop from './views/Stop.vue'
import Strength from './views/Strength.vue'
import Energy from './views/Energy.vue'
import Frustration from './views/Frustration.vue'


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
    {
      path: '/home',
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
    {
      path: '/stop',
      name: 'stop',
      component: Stop,
    },
    {
      path: '/strength',
      name: 'strength',
      component: Strength,
    },
    {
      path: '/energy',
      name: 'energy',
      component: Energy,
    },
    {
      path: '/frustration',
      name: 'frustration',
      component: Frustration,
    },
  ],
});