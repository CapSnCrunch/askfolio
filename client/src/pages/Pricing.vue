<script setup>
import { ref } from 'vue'

// Pricing toggle state (true = yearly, false = monthly)
const isYearly = ref(true)
</script>

<template>
  <div class="pt-32 pb-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-5xl font-bold text-center mb-4">Simple Pricing</h1>
      <p class="text-lg text-gray-600 text-center mb-16">
        Choose the perfect plan for your needs. Always flexible to scale.
      </p>
      
      <!-- Billing Toggle -->
      <div class="flex items-center justify-center mb-16">
        <span 
          class="text-lg font-medium mr-4 transition-colors duration-300 ease-in-out" 
          :class="{ 'text-gray-900': !isYearly, 'text-gray-500': isYearly }"
        >
          Monthly
        </span>
        <button 
          @click="isYearly = !isYearly"
          class="relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none"
          :class="isYearly ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-gray-300'"
        >
          <span 
            :class="isYearly ? 'translate-x-9' : 'translate-x-1'"
            class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md"
          ></span>
        </button>
        <span 
          class="text-lg font-medium ml-4 transition-colors duration-300 ease-in-out" 
          :class="{ 'text-gray-900': isYearly, 'text-gray-500': !isYearly }"
        >
          Yearly
        </span>
        <span class="ml-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Save 50%</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Free Plan -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-4">Free</h3>
          <div class="text-4xl font-bold mb-6">$0<span class="text-lg font-normal text-gray-600">/month</span></div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Basic AI portfolio</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>askfolio.com subdomain</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>50 conversations/month</span>
            </li>
          </ul>
          <button class="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
        
        <!-- Pro Plan -->
        <div class="bg-white rounded-xl p-8 transform scale-105 border-gradient-pro">
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Pro</h3>
          <div class="flex items-baseline gap-3 mb-6">
            <div class="text-4xl font-bold text-gray-900">
              <span v-if="isYearly">${{ (1.99).toFixed(2) }}</span>
              <span v-else>${{ (3.99).toFixed(2) }}</span>
              <span class="text-lg font-normal text-gray-600">/month<span v-if="isYearly">,</span></span>
            </div>
            <div 
              class="text-sm text-gray-400 transition-all duration-300 ease-in-out transform overflow-hidden"
              :class="isYearly ? 'translate-x-0 opacity-100 max-w-xs' : '-translate-x-4 opacity-0 max-w-0'"
            >
              <span class="whitespace-nowrap">billed annually ($23.88/year)</span>
            </div>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Advanced AI portfolio</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Custom domain</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Unlimited conversations</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Analytics dashboard</span>
            </li>
          </ul>
          <button class="w-full bg-gradient-blue-green text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</template>