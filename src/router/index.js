import { createRouter, createWebHistory } from 'vue-router'
import maison from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: maison
    },
  ]
})

export default router
