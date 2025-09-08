<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import FAQSection from '../components/FAQSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const usernameInput = ref('')
const isSticky = ref(false)
const stickyInputRef = ref(null)
const originalInputRef = ref(null)

const handleUsernameInput = (event) => {
  let value = event.target.value
  
  // Prevent whitespace at the beginning
  if (value.length === 1 && /\s/.test(value)) {
    event.target.value = ''
    usernameInput.value = ''
    return
  }
  
  // Convert any whitespace to dashes and lowercase all letters
  value = value.replace(/\s/g, '-').toLowerCase()
  
  // Update both the input and the reactive value
  event.target.value = value
  usernameInput.value = value
}

const handleScroll = () => {
  if (originalInputRef.value) {
    const rect = originalInputRef.value.getBoundingClientRect()
    // Check if the original input has scrolled past the navbar (80px)
    const shouldStick = rect.bottom < 100
    isSticky.value = shouldStick
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Animated counter
const animatedCount = ref(0)
const counterElement = ref(null)
const hasAnimated = ref(false)

const animateCounter = () => {
  if (hasAnimated.value) return
  
  hasAnimated.value = true
  const targetCount = 10000
  const duration = 2000 // 2 seconds
  const startTime = Date.now()
  
  const updateCount = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    animatedCount.value = Math.floor(easeOutQuart * targetCount)
    
    if (progress < 1) {
      requestAnimationFrame(updateCount)
    } else {
      animatedCount.value = targetCount
    }
  }
  
  requestAnimationFrame(updateCount)
}

// Intersection Observer to trigger animation when element comes into view
let observer = null

onMounted(() => {
  if (counterElement.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(counterElement.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

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
    <!-- Sticky Username Input -->
    <div 
      ref="stickyInputRef"
      class="fixed top-20 left-0 right-0 z-40 bg-transparent border-b border-white/20 px-6 py-4 transition-all duration-300 ease-in-out"
      :class="{
        'translate-y-0 opacity-100': isSticky,
        '-translate-y-full opacity-0 pointer-events-none': !isSticky
      }"
    >
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-center">
           <div class="flex items-center bg-white border-2 border-gray-100 rounded-3xl overflow-hidden max-w-lg w-full shadow-md hover:shadow-lg hover:border-gray-200 transition-all duration-300 pr-1">
             <span class="pl-4 pr-1 py-3 font-mono text-xs text-gray-800 bg-gray-50/50 whitespace-nowrap">
               askfolio.com/
             </span>
             <input 
               type="text" 
               class="flex-1 pr-2 py-3 text-sm border-none bg-transparent font-mono text-gray-900 outline-none placeholder-gray-300 focus:placeholder-gray-200" 
               placeholder="your-name"
               v-model="usernameInput"
               @input="handleUsernameInput"
             />
             <button class="m-1 px-2.5 py-2 bg-gradient-blue-green text-white rounded-3xl hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center justify-center min-w-8 group">
               <ArrowRight :size="14" :stroke-width="4" class="group-hover:translate-x-0.5 transition-transform duration-200" />
             </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-blue-green">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div 
          ref="counterElement"
          class="inline-flex items-center justify-center gap-2 mb-8 px-4 py-2 bg-white/20 rounded-full border border-white/30"
        >
          <p class="text-lg font-bold text-white">{{ animatedCount }}+</p>
          <p class="text-sm text-white">conversations started</p>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          <span class="text-white">Get your <span class="text-white underline-animated">AI Portfolio</span></span>
        </h1>
        
        <p class="text-2xl text-white/90 mb-10 subtitle-glow">
          Create a conversational portfolio that answers<br>questions about you 24/7
        </p>
        
        <div class="mb-10" ref="originalInputRef">
          <div class="flex justify-center">
             <div class="flex items-center bg-white border-2 border-white/30 rounded-3xl overflow-hidden max-w-lg w-full shadow-lg hover:shadow-xl hover:border-white/50 transition-all duration-300 pr-1.5">
               <span class="pl-6 pr-1 py-4 font-mono text-sm text-gray-500 bg-gray-50/50 whitespace-nowrap">
                 askfolio.com/
               </span>
                 <input 
                   type="text" 
                   class="flex-1 pr-3 py-4 text-base border-none bg-transparent font-mono text-gray-900 outline-none placeholder-gray-300 focus:placeholder-gray-200" 
                   placeholder="your-name"
                   v-model="usernameInput"
                   @input="handleUsernameInput"
                 />
               <button class="m-1.5 px-3.5 py-2.5 bg-black text-white rounded-3xl hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center justify-center min-w-10 group">
                 <ArrowRight :size="18" :stroke-width="4" class="group-hover:translate-x-0.5 transition-transform duration-200" />
               </button>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <a href="#" class="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all">
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
.underline-animated {
  position: relative;
  text-decoration: none;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
}

.underline-animated::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 5px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 45px rgba(255, 255, 255, 0.2);
  animation: underlineGrow 0.35s ease-out 0.25s forwards;
}

.subtitle-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
}

@keyframes underlineGrow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
