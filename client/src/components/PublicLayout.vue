<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const year = new Date().getFullYear()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

// Only use transparent navbar on home page
const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  // Check if scrolled past the hero section (approximately viewport height)
  isScrolled.value = window.scrollY > window.innerHeight * 0.8
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-lg"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <div class="flex items-center font-semibold text-xl">
            <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-300">
              <img 
                src="@/assets/icon.svg" 
                alt="AskFolio" 
                class="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 icon-svg"
                :class="{
                  'icon-white': isHomePage && !isScrolled,
                  'icon-black': !isHomePage || isScrolled
                }"
              />
            </div>
            <router-link 
              to="/" 
              class="no-underline text-lg md:text-2xl font-bold transition-colors duration-300"
              :class="{
                'text-white': isHomePage && !isScrolled,
                'text-black': !isHomePage || isScrolled
              }"
              @click="closeMobileMenu"
            >
              AskFolio
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8 justify-center flex-1">
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

          <!-- Desktop Auth Buttons -->
          <div class="hidden lg:flex items-center gap-4 flex-1 justify-end">
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
              class="px-4 py-2 rounded-3xl text-sm md:text-md font-medium hover:-translate-y-0.5 hover:shadow-md transition-all"
              :class="{
                'bg-white text-black': isHomePage && !isScrolled,
                'bg-gradient-blue-green text-white': !isHomePage || isScrolled
              }"
            >
              Register
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-md transition-colors duration-300"
            :class="{
              'text-white hover:bg-white/10': isHomePage && !isScrolled,
              'text-gray-600 hover:bg-gray-100': !isHomePage || isScrolled
            }"
          >
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          v-if="isMobileMenuOpen"
          class="lg:hidden py-4 border-t"
          :class="{
            'border-white/20': isHomePage && !isScrolled,
            'border-gray-200': !isHomePage || isScrolled
          }"
        >
          <nav class="flex flex-col space-y-4">
            <router-link 
              to="/" 
              class="font-medium py-2 transition-colors duration-300"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled
              }"
              @click="closeMobileMenu"
              exact-active-class="text-current font-semibold"
            >
              Portfolio
            </router-link>
            <router-link 
              to="/examples" 
              class="font-medium py-2 transition-colors duration-300"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled
              }"
              @click="closeMobileMenu"
              exact-active-class="text-current font-semibold"
            >
              Examples
            </router-link>
            <router-link 
              to="/pricing" 
              class="font-medium py-2 transition-colors duration-300"
              :class="{
                'text-white/90 hover:text-white': isHomePage && !isScrolled,
                'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled
              }"
              @click="closeMobileMenu"
              exact-active-class="text-current font-semibold"
            >
              Pricing
            </router-link>
            <div class="pt-4 space-y-3 border-t"
              :class="{
                'border-white/20': isHomePage && !isScrolled,
                'border-gray-200': !isHomePage || isScrolled
              }"
            >
              <router-link 
                to="/login" 
                class="block font-medium py-2 transition-colors duration-300"
                :class="{
                  'text-white/90 hover:text-white': isHomePage && !isScrolled,
                  'text-gray-600 hover:text-gray-900': !isHomePage || isScrolled
                }"
                @click="closeMobileMenu"
              >
                Login
              </router-link>
              <router-link 
                to="/register" 
                class="block w-full text-center px-4 py-3 rounded-3xl text-sm font-medium transition-all"
                :class="{
                  'bg-white text-black hover:bg-gray-100': isHomePage && !isScrolled,
                  'bg-gradient-blue-green text-white hover:opacity-90': !isHomePage || isScrolled
                }"
                @click="closeMobileMenu"
              >
                Register
              </router-link>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-8 md:py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center font-bold">
            <div class="w-8 h-8 flex items-center justify-center">
              <img 
                src="@/assets/icon.svg" 
                alt="AskFolio" 
                class="w-8 h-8"
              />
            </div>
            <span class="text-xl font-bold">AskFolio</span>
          </div>
          <div class="text-gray-600 text-center md:text-left">© {{ year }}</div>
          <nav class="flex flex-wrap gap-4 md:gap-6 justify-center">
            <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">Features</router-link>
            <router-link to="/pricing" class="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">FAQ</router-link>
            <a href="/terms" class="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">Terms</a>
            <a href="/privacy" class="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">Privacy</a>
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

/* Icon color styling for consistent stroke rendering */
.icon-svg {
  transition: filter 0.3s ease-in-out;
}

.icon-white {
  filter: invert(1);
}

.icon-black {
  filter: none;
}
</style>

