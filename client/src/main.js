import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authService from './services/authService.js'
import './assets/tailwind.css'

// Provide router to authService for navigation
authService.setRouter(router)

createApp(App).use(router).mount('#app')
