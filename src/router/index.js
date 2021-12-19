import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'winners',
        name: 'winners',
        component: () => import('../views/Winners.vue'),
      },
      {
        path: 'partners',
        name: 'partners',
        component: () => import('../views/Partners.vue'),
      },
      {
        path: 'for-participants',
        name: 'for-participants',
        component: () => import('../views/ForParticipants.vue'),
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/Info.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
