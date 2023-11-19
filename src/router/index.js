import { createRouter, createWebHistory } from 'vue-router'
import maison from '../components/Home.vue'
import Command from '../components/Commande.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: maison
    },

    {
      path: '/liste',
      name: 'liste',
      component: Command
    },
  ]
})

export default router
