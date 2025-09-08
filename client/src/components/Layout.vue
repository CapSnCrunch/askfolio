<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const year = new Date().getFullYear()
const isScrolled = ref(false)
const route = useRoute()

// Only use transparent navbar on home page
const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  // Check if scrolled past the hero section (approximately viewport height)
  isScrolled.value = window.scrollY > window.innerHeight * 0.8
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      :class="{
        // Home page: glassy effect over colored background
        'bg-white/20 backdrop-blur-lg border-b border-white/30': isHomePage && !isScrolled,
        'bg-white/20 backdrop-blur-lg border-b border-white/30': isHomePage && isScrolled,
        // Other pages: glassy effect over white background
        'bg-white/30 backdrop-blur-lg border-b border-gray-200/30': !isHomePage
      }"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center gap-3 font-semibold text-xl flex-1">
            <div 
              class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-300"
              :class="{
                'bg-white text-black': isHomePage && !isScrolled,
                'bg-black text-white': !isHomePage || isScrolled
              }"
            >
              AF
            </div>
            <router-link 
              to="/" 
              class="no-underline transition-colors duration-300"
              :class="{
                'text-white': isHomePage && !isScrolled,
                'text-black': !isHomePage || isScrolled
              }"
            >
              AskFolio
            </router-link>
          </div>
          <nav class="flex items-center gap-8 justify-center flex-1">
            <router-link 
              to="/" 
              class="font-medium relative pb-1"
              :class="{
                'white-underline': isHomePage && !isScrolled
              }"
              active-class="text-current"
              exact-active-class="text-current underline-active"
            >
              <span
                class="transition-colors duration-300"
                :class="{
                  'text-white': isHomePage && !isScrolled && $route.path === '/',
                  'text-white/90 hover:text-white': isHomePage && !isScrolled && $route.path !== '/',
                  'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled,  
                }"
              >
                Portfolio
              </span>  
            </router-link>
            <router-link 
              to="/examples" 
              class="font-medium transition-colors duration-300 relative pb-1"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled,
                'white-underline': isHomePage && !isScrolled
              }"
              active-class="text-current"
              exact-active-class="text-current underline-active"
            >
              Examples
            </router-link>
            <router-link 
              to="/pricing" 
              class="font-medium transition-colors duration-300 relative pb-1"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled,
                'white-underline': isHomePage && !isScrolled
              }"
              active-class="text-current"
              exact-active-class="text-current underline-active"
            >
              Pricing
            </router-link>
          </nav>
          <div class="flex items-center gap-4 flex-1 justify-end">
            <router-link 
              to="/login" 
              class="font-medium transition-colors duration-300"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled
              }"
            >
              Login
            </router-link>
            <router-link 
              to="/register" 
              class="px-4 py-2 rounded-3xl text-md font-medium hover:-translate-y-0.5 hover:shadow-md transition-all"
              :class="{
                'bg-white text-black': isHomePage && !isScrolled,
                'bg-gradient-blue-green text-white': !isHomePage || isScrolled
              }"
            >
              Register
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center justify-between flex-wrap gap-6">
          <div class="flex items-center gap-3 font-semibold">
            <div class="w-6 h-6 bg-black text-white rounded-md flex items-center justify-center text-xs font-bold">
              AF
            </div>
            <span>AskFolio</span>
          </div>
          <div class="text-gray-600">© {{ year }}</div>
          <nav class="flex gap-6">
            <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors">Features</router-link>
            <router-link to="/pricing" class="text-gray-600 hover:text-gray-900 transition-colors">FAQ</router-link>
            <a href="/terms" class="text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
            <a href="/privacy" class="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Base underline styling */
.underline-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: black;
  transition: background-color 0.3s ease-in-out;
}

/* White underlines when on home page and not scrolled */
.white-underline.underline-active::after {
  background: white;
}
</style>

