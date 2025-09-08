import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Examples from '../pages/Examples.vue'
import Pricing from '../pages/Pricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // Portfolio now redirects to Home
    redirect: '/'
  },
  {
    path: '/examples', 
    name: 'Examples',
    component: Examples
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

