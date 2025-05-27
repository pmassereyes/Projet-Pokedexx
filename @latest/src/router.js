// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HiddenPart from '@/views/HiddenPart.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/hidden', name: 'Hidden', component: HiddenPart },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
