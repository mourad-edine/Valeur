import { createRouter, createWebHistory } from 'vue-router'
import maison from '../components/utiisateur/Home.vue'
import Command from '../components/utiisateur/Commande.vue'
import information from '../components/utiisateur/Information.vue'
import Login from '../components/utiisateur/Login.vue'
import Register from '../components/utiisateur/Register.vue'
import categories from '../components/utiisateur/Categorie.vue'
import Simplemenu from '../components/simple/SimpleMenu.vue'
import categoriesimple from '../components/simple/categoriesimple.vue'
import Liste from '../components/admin/listed.vue'
import dispo from '../components/admin/ProduitDispo.vue'

import sous from '../components/admin/sousproduit.vue'
import supplement from '../components/admin/supplement.vue'
import dashboard from '../components/admin/Dashboard.vue'
import Nopaid from '../components/admin/paid.vue'
import create from '../components/simple/create.vue'
import Detail from '../components/admin/detail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: maison
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },


    {
      path: '/liste',
      name: 'liste',
      component: Command
    },

    {
      path: '/paid',
      name: 'paid',
      component: Nopaid
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

    {
      path: '/',
      name: 'simple',
      component: Simplemenu
    },


    {
      path: '/categoriesimple/:id',
      name: 'categoriesimple',
      component: categoriesimple
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },


    {
      path: '/listes',
      name: 'listes',
      component: Liste
    },

    {
      path: '/dispo',
      name: 'dispo',
      component: dispo
    },

    {
      path: '/souproduit/:id',
      name: 'sousproduit',
      component: sous
    },
    {
      path: '/supplement/:id',
      name: 'supplement',
      component: supplement
    },

    {
      path: '/create/:id',
      name: 'create',
      component: create
    },


  ]
})

export default router
