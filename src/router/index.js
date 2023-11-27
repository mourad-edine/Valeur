import { createRouter, createWebHistory } from 'vue-router'
import maison from '../components/Home.vue'
import Command from '../components/Commande.vue'
import information from '../components/Information.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import categories from '../components/Categorie.vue'


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
    {
      path: '/info/:id',
      name: 'info',
      component: information
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/categorie/:id',
      name: 'categorie',
      component: categories
    },


  ]
})

export default router
