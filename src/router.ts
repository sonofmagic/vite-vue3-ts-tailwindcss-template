import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/pages/about.vue'
import HomeView from '@/pages/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
