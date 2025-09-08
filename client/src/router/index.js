import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../components/PublicLayout.vue'
import Home from '../pages/Home.vue'
import Examples from '../pages/Examples.vue'
import Pricing from '../pages/Pricing.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Terms from '../pages/Terms.vue'
import Privacy from '../pages/Privacy.vue'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        // Portfolio now redirects to Home
        redirect: '/'
      },
      {
        path: 'examples', 
        name: 'Examples',
        component: Examples
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: Pricing
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: Privacy
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

