<script setup>
// Pricing-specific logic
</script>

<template>
  <div class="pt-32 pb-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-5xl font-bold text-center mb-16">Pricing</h1>
      <p class="text-xl text-gray-600 text-center mb-16">
        Choose the plan that's right for you
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <span>100 conversations/month</span>
            </li>
          </ul>
          <button class="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
        
        <div class="bg-gradient-blue-green text-white rounded-xl p-8 transform scale-105">
          <h3 class="text-2xl font-bold mb-4">Pro</h3>
          <div class="text-4xl font-bold mb-6">$19<span class="text-lg font-normal opacity-80">/month</span></div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>Advanced AI portfolio</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>Custom domain</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>Unlimited conversations</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>Analytics dashboard</span>
            </li>
          </ul>
          <button class="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Free Trial
          </button>
        </div>
        
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
          <div class="text-4xl font-bold mb-6">$99<span class="text-lg font-normal text-gray-600">/month</span></div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>White-label solution</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>API access</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Priority support</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500">✓</span>
              <span>Custom integrations</span>
            </li>
          </ul>
          <button class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </div>
</template>