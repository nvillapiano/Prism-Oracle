import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AngerView from './views/AngerView.vue'
import PainView from './views/PainView.vue'
import StopView from './views/StopView.vue'
import StrengthView from './views/StrengthView.vue'
import EnergyView from './views/EnergyView.vue'
import FrustrationView from './views/FrustrationView.vue'
import HappinessView from './views/HappinessView.vue'
import RejectionView from './views/RejectionView.vue'
import SuccessView from './views/SuccessView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
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
    component: AngerView,
  },
  {
    path: '/pain',
    name: 'pain',
    component: PainView,
  },
  {
    path: '/stop',
    name: 'stop',
    component: StopView,
  },
  {
    path: '/strength',
    name: 'strength',
    component: StrengthView,
  },
  {
    path: '/energy',
    name: 'energy',
    component: EnergyView,
  },
  {
    path: '/frustration',
    name: 'frustration',
    component: FrustrationView,
  },
  {
    path: '/happiness',
    name: 'happiness',
    component: HappinessView,
  },
  {
    path: '/rejection',
    name: 'rejection',
    component: RejectionView,
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;