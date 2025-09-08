<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center gap-3 font-semibold text-xl flex-1">
            <div class="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm">
              AF
            </div>
            <router-link to="/" class="text-black no-underline">AskFolio</router-link>
          </div>
          <nav class="flex items-center gap-8 justify-center flex-1">
            <router-link 
              to="/" 
              class="text-gray-600 hover:text-gray-900 font-medium transition-colors relative pb-1"
              active-class="text-gray-900"
              exact-active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-blue-green after:rounded-full"
            >
              Portfolio
            </router-link>
            <router-link 
              to="/examples" 
              class="text-gray-600 hover:text-gray-900 font-medium transition-colors relative pb-1"
              active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-blue-green after:rounded-full"
            >
              Examples
            </router-link>
            <router-link 
              to="/pricing" 
              class="text-gray-600 hover:text-gray-900 font-medium transition-colors relative pb-1"
              active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-blue-green after:rounded-full"
            >
              Pricing
            </router-link>
          </nav>
          <div class="flex items-center gap-4 flex-1 justify-end">
            <a href="#" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Login</a>
            <a href="#" class="bg-gradient-blue-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:-translate-y-0.5 hover:shadow-md transition-all">
              Register
            </a>
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
