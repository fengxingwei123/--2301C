import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Homes',

    component: () => import(/* webpackChunkName: "about" */ '../views/Homes.vue')
  },
  {
    path: '/lists',
    name: 'Lists',

    component: () => import(/* webpackChunkName: "about" */ '../views/Lists.vue')
  },
  {
    path: '/shopcar',
    name: 'shopcar',

    component: () => import(/* webpackChunkName: "about" */ '../views/Shopcar.vue'),

  }, 
  {
    path: '/Login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/my',
    name: 'my',

    component: () => import(/* webpackChunkName: "about" */ '../views/my.vue'),
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
