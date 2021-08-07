import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home';
import Videos from '@/views/Videos';
import Sobre from '@/views/Sobre';
import Contato from '@/views/Contato';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/videos',
    component: Videos,
  },
  {
    path: '/sobre',
    component: Sobre,
  },
  {
    path: '/contato',
    component: Contato,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
