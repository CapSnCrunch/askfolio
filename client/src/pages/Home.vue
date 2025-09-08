<script setup>
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import FAQSection from '../components/FAQSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const usernameInput = ref('')

const features = [
  {
    icon: '🌟',
    title: 'Available 24/7',
    desc: 'Your AI twin never sleeps.'
  },
  {
    icon: '📈',
    title: 'Improve engagement by 40%',
    desc: 'Turn visitors into opportunities.'
  },
  {
    icon: '🚀',
    title: 'Unlimited AI Power',
    desc: 'No message limits. Superior AI for smarter conversations.'
  },
  {
    icon: '🎯',
    title: 'Smart adaptation',
    desc: 'Adapt to each visitor\'s needs.'
  },
  {
    icon: '🔗',
    title: 'Custom Domain',
    desc: 'Your brand, your domain.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    desc: 'Track every interaction.'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 text-center bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="inline-flex items-baseline gap-2 mb-8 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <span class="text-2xl font-bold text-blue-500">1000+</span>
          <span class="text-sm text-gray-600">conversations started</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          <span class="text-gradient-blue-green">Get your AI Portfolio</span>
        </h1>
        
        <p class="text-2xl text-gray-600 mb-10 leading-relaxed">
          Create a conversational portfolio that answers<br>questions about you 24/7
        </p>
        
        <div class="mb-10">
          <div class="flex justify-center">
            <div class="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden max-w-lg w-full">
              <span class="pl-5 pr-2 py-3 font-mono text-gray-600 bg-gray-50 whitespace-nowrap">
                askfolio.com/
              </span>
              <input 
                type="text" 
                class="flex-1 pr-2 py-3 border-none bg-transparent font-mono text-gray-900 outline-none placeholder-gray-400" 
                placeholder="yourname"
                v-model="usernameInput"
              />
              <button class="m-1 px-3 py-2 bg-gradient-blue-green text-white rounded-lg hover:translate-x-0.5 hover:shadow-md transition-all flex items-center justify-center min-w-10">
                <ArrowRight :size="18" />
              </button>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <a href="#" class="inline-block px-8 py-4 bg-black text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Try it live
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-4">Features</h2>
        <p class="text-xl text-gray-600 text-center mb-16">Everything you need to succeed</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white border border-gray-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-3xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Perfect For Section -->
    <section class="py-24 text-center">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-5xl font-bold mb-16">Perfect for</h2>
        <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Developers</div>
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Content Creators</div>
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Freelancers</div>
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Students</div>
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Designers</div>
          <div class="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer">Digital Pros</div>
        </div>
      </div>
    </section>

    <!-- Share Anywhere Section -->
    <section class="py-24 bg-gray-50 text-center">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-5xl font-bold mb-16">Share anywhere</h2>
        <div class="flex justify-center gap-8 flex-wrap">
          <div class="bg-white border border-gray-200 rounded-xl p-8 text-center min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-5xl mb-4">📱</div>
            <div class="font-semibold text-lg">Social Media</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-8 text-center min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-5xl mb-4">📧</div>
            <div class="font-semibold text-lg">Email Signature</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-8 text-center min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-5xl mb-4">💼</div>
            <div class="font-semibold text-lg">Business Cards</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- FAQ Section -->
    <FAQSection />
  </div>
</template>

<style scoped>
/* Keep any existing styles if needed */
</style>
