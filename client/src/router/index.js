import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../components/PublicLayout.vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import Home from '../pages/Home.vue'
import Examples from '../pages/Examples.vue'
import Pricing from '../pages/Pricing.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import DashboardAnalytics from '../pages/DashboardAnalytics.vue'
import DashboardPublish from '../pages/DashboardPublish.vue'
import DashboardBasicInfo from '../pages/DashboardBasicInfo.vue'
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
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'analytics',
        name: 'DashboardAnalytics',
        component: DashboardAnalytics
      },
      {
        path: 'publish',
        name: 'DashboardPublish',
        component: DashboardPublish
      },
      {
        path: 'basic-info',
        name: 'DashboardBasicInfo',
        component: DashboardBasicInfo
      },
      {
        path: 'ai',
        name: 'DashboardAI',
        component: () => import('../pages/DashboardAI.vue')
      },
      {
        path: 'tools',
        name: 'DashboardTools',
        component: () => import('../pages/DashboardTools.vue')
      },
      {
        path: 'questions',
        name: 'DashboardQuestions',
        component: () => import('../pages/DashboardQuestions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

