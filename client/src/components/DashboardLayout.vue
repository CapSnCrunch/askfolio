<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Left Sidebar -->
    <div :class="['bg-white shadow-lg flex flex-col transition-all duration-300 relative', sidebarCollapsed ? 'w-16' : 'w-64']">
      <!-- Sidebar Toggle Button -->
      <button 
        @click="toggleSidebar"
        class="absolute top-4 -right-4 z-10 bg-white shadow-lg border border-gray-200 rounded-full p-2 hover:bg-gray-50 transition-all duration-300"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h2m0-16h8a2 2 0 012 2v12a2 2 0 01-2 2H8m0-16v16" />
        </svg>
      </button>
      
      <!-- Logo Section -->
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <!-- Logo (always visible, text hidden when collapsed) -->
          <router-link 
            to="/" 
            :class="[
              'flex items-center no-underline px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors',
              sidebarCollapsed ? 'justify-center' : 'space-x-3'
            ]"
          >
            <div class="w-8 h-8 flex items-center justify-center">
              <img 
                src="@/assets/icon.svg" 
                alt="AskFolio" 
                class="w-8 h-8 text-black"
              />
            </div>
            <span v-if="!sidebarCollapsed" class="text-xl font-bold text-black">AskFolio</span>
          </router-link>
        </div>
      </div>

      <!-- Navigation Section -->
      <nav class="flex-1 p-4">
        <!-- Main Navigation -->
        <div class="space-y-2 mb-8">
          <router-link 
            to="/dashboard" 
            class="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            :class="sidebarCollapsed ? 'justify-center' : 'space-x-3'"
            :title="sidebarCollapsed ? 'Dashboard' : ''"
            active-class="bg-blue-50 text-blue-700"
          >
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v6m4-6v6m4-6v6" />
            </svg>
            <span v-if="!sidebarCollapsed">Dashboard</span>
          </router-link>
          
          <router-link 
            to="/dashboard/analytics" 
            class="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            :class="sidebarCollapsed ? 'justify-center' : 'space-x-3'"
            :title="sidebarCollapsed ? 'Analytics' : ''"
            active-class="bg-blue-50 text-blue-700"
          >
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
            </svg>
            <span v-if="!sidebarCollapsed">Analytics</span>
          </router-link>
          
          <router-link 
            to="/dashboard/publish" 
            class="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            :class="sidebarCollapsed ? 'justify-center' : 'space-x-3'"
            :title="sidebarCollapsed ? 'Publish' : ''"
            active-class="bg-blue-50 text-blue-700"
          >
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span v-if="!sidebarCollapsed">Publish</span>
          </router-link>
        </div>

        <!-- Portfolio Section -->
        <div v-if="!sidebarCollapsed" class="space-y-4">
          <!-- Portfolio Header -->
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Portfolio</h3>
            <span class="text-sm text-gray-400">2/4</span>
          </div>
          
          <!-- Portfolio Tabs -->
          <div class="space-y-1">
            <router-link 
              to="/dashboard/basic-info" 
              class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              active-class="bg-blue-50 text-blue-700"
            >
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-sm">Basic Info</span>
              <svg class="w-4 h-4 text-blue-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </router-link>
            
            <router-link 
              to="/dashboard/ai" 
              class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              active-class="bg-blue-50 text-blue-700"
            >
              <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span class="text-sm">AI</span>
            </router-link>
            
            <router-link 
              to="/dashboard/tools" 
              class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              active-class="bg-blue-50 text-blue-700"
            >
              <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span class="text-sm">Tools</span>
            </router-link>
            
            <router-link 
              to="/dashboard/questions" 
              class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              active-class="bg-blue-50 text-blue-700"
            >
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-sm">Questions</span>
              <svg class="w-4 h-4 text-blue-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Collapsed Portfolio Icons -->
        <div v-if="sidebarCollapsed" class="space-y-2 mb-8">
          <div class="h-px bg-gray-200 my-4"></div>
          
          <!-- Portfolio icon indicators when collapsed -->
          <div class="flex flex-col items-center space-y-2">
            <div class="w-2 h-2 bg-blue-500 rounded-full" title="Basic Info - Completed"></div>
            <div class="w-2 h-2 bg-gray-300 rounded-full" title="AI - Pending"></div>
            <div class="w-2 h-2 bg-gray-300 rounded-full" title="Tools - Pending"></div>
            <div class="w-2 h-2 bg-blue-500 rounded-full" title="Questions - Completed"></div>
          </div>
        </div>

        <!-- Bottom section with usage info -->
        <div v-if="!sidebarCollapsed" class="mt-auto pt-8">
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-600">Monthly Usage</span>
              <span class="text-sm text-gray-500">3/50</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 6%"></div>
            </div>
          </div>
          
          <button class="w-full mt-4 text-left text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-2">
            <span>Suggest a feature</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- User Section -->
      <div class="border-t border-gray-200 p-4">
        <div :class="['flex items-center', sidebarCollapsed ? 'justify-center' : 'space-x-3']">
          <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span class="text-sm font-medium text-gray-600">
              {{ user?.email?.charAt(0).toUpperCase() || 'U' }}
            </span>
          </div>
          <div v-if="!sidebarCollapsed" class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">Samuel Perales</p>
            <p class="text-xs text-gray-500 truncate">{{ user?.email || 'user@example.com' }}</p>
          </div>
          <button
            v-if="!sidebarCollapsed"
            @click="handleLogout"
            class="text-gray-400 hover:text-gray-600 transition-colors"
            title="Logout"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <!-- Main Content Area -->
    <div class="flex-1 overflow-auto">
      <div class="p-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/services/authService.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'DashboardLayout',
  setup() {
    const router = useRouter()
    const user = ref(null)
    const sidebarCollapsed = ref(false)

    onMounted(() => {
      // Get current user
      user.value = authService.getCurrentUser()
      
      // Redirect to login if not authenticated
      if (!authService.isAuthenticated()) {
        router.push('/login')
      }
    })

    const handleLogout = async () => {
      try {
        await authService.logout()
        router.push('/login')
      } catch (error) {
        console.error('Logout error:', error)
        // Still redirect even if logout fails
        router.push('/login')
      }
    }

    const toggleSidebar = () => {
      sidebarCollapsed.value = !sidebarCollapsed.value
    }

    return {
      user,
      handleLogout,
      sidebarCollapsed,
      toggleSidebar
    }
  }
}
</script>
