import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import DataSiswa from '../views/DataSiswa.vue'
import Login from '../views/Login.vue'
import Petugas from '../views/Petugas.vue'
import Input from '../views/Input.vue'
import Pelanggaran from '../views/Pelanggaran.vue'
import Poin from '../views/Poin.vue'
import Navbar from '../views/layouts/Navbar.vue'


import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login, footer: Footer},
  },
  
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/datasiswa',
    name: 'datasiswa',
    components: {default: DataSiswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {default: Profile, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/petugas',
    name: 'petugas',
    components: {default: Petugas, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/pelanggaran',
    name: 'pelanggaran',
    components: {default: Pelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/input',
    name: 'input',
    components: {default: Input, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/poin',
    name: 'poin',
    components: {default: Poin, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
