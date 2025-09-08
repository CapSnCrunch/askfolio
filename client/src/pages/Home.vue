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
  const duration = 2500 // 0.6 seconds to match underline animation (0.25s delay + 0.35s animation)
  const startTime = Date.now()
  
  const updateCount = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation - gentler ease out
    const easeOutCubic = 1 - Math.pow(1 - progress, 3)
    animatedCount.value = Math.floor(easeOutCubic * targetCount)
    
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
      class="fixed top-16 md:top-20 left-0 right-0 z-40 bg-transparent px-4 sm:px-6 py-4 transition-all duration-300 ease-in-out"
      :class="{
        'translate-y-0 opacity-100': isSticky,
        '-translate-y-full opacity-0 pointer-events-none': !isSticky
      }"
    >
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-center">
           <div class="flex items-center bg-white border-2 border-gray-100 rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-lg shadow-md hover:shadow-lg hover:border-gray-200 transition-all duration-300 pr-1">
             <span class="pl-3 sm:pl-4 pr-1 py-2.5 sm:py-3 font-mono text-xs text-gray-800 bg-gray-50/50 whitespace-nowrap">
               askfolio.com/
             </span>
             <input 
               type="text" 
               class="flex-1 pr-2 py-2.5 sm:py-3 text-xs sm:text-sm border-none bg-transparent font-mono text-gray-900 outline-none placeholder-gray-300 focus:placeholder-gray-200" 
               placeholder="your-name"
               v-model="usernameInput"
               @input="handleUsernameInput"
             />
             <button class="m-1 px-2 sm:px-2.5 py-2 sm:py-2 bg-black text-white rounded-3xl hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center justify-center min-w-8 group">
               <ArrowRight :size="14" :stroke-width="4" class="group-hover:translate-x-0.5 transition-transform duration-200" />
             </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-blue-green px-4 sm:px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div 
          ref="counterElement"
          class="inline-flex items-center justify-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-2 bg-white/20 rounded-full border border-white/30"
        >
          <p class="text-sm sm:text-lg font-bold text-white">{{ animatedCount.toLocaleString() }}+</p>
          <p class="text-xs sm:text-sm text-white">conversations started</p>
        </div>
        
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight">
          <span class="text-white">Get your <span class="text-white underline-animated">AI Portfolio</span></span>
        </h1>
        
        <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 subtitle-glow px-4">
          Create a conversational portfolio that answers<br class="hidden sm:block">questions about you 24/7
        </p>
        
        <div class="mb-8 sm:mb-10" ref="originalInputRef">
          <div class="flex justify-center">
             <div class="flex items-center bg-white border-2 border-white/30 rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-lg shadow-lg hover:shadow-xl hover:border-white/50 transition-all duration-300 pr-1 sm:pr-1.5">
               <span class="pl-4 sm:pl-6 pr-1 py-3 sm:py-4 font-mono text-xs sm:text-sm text-gray-500 bg-gray-50/50 whitespace-nowrap">
                 askfolio.com/
               </span>
                 <input 
                   type="text" 
                   class="flex-1 pr-2 sm:pr-3 py-3 sm:py-4 text-sm sm:text-base border-none bg-transparent font-mono text-gray-900 outline-none placeholder-gray-300 focus:placeholder-gray-200" 
                   placeholder="your-name"
                   v-model="usernameInput"
                   @input="handleUsernameInput"
                 />
               <button class="m-1 sm:m-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 bg-black text-white rounded-3xl hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center justify-center min-w-8 sm:min-w-10 group">
                 <ArrowRight :size="16" :stroke-width="4" class="group-hover:translate-x-0.5 transition-transform duration-200 sm:w-[18px] sm:h-[18px]" />
               </button>
            </div>
          </div>
        </div>

        <div class="mb-12 sm:mb-16">
          <a href="#" class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all text-sm sm:text-base">
            Try it live
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Features</h2>
        <p class="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16">Everything you need to succeed</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-2xl sm:text-3xl mb-3 sm:mb-4">{{ feature.icon }}</div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Perfect For Section -->
    <section class="py-16 sm:py-20 md:py-24 text-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">Perfect for</h2>
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Developers</div>
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Content Creators</div>
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Freelancers</div>
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Students</div>
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Designers</div>
          <div class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer text-sm sm:text-base">Digital Pros</div>
        </div>
      </div>
    </section>

    <!-- Share Anywhere Section -->
    <section class="py-16 sm:py-20 md:py-24 bg-gray-50 text-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">Share anywhere</h2>
        <div class="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <div class="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center min-w-40 sm:min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">📱</div>
            <div class="font-semibold text-base sm:text-lg">Social Media</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center min-w-40 sm:min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">📧</div>
            <div class="font-semibold text-base sm:text-lg">Email Signature</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center min-w-40 sm:min-w-48 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">💼</div>
            <div class="font-semibold text-base sm:text-lg">Business Cards</div>
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
