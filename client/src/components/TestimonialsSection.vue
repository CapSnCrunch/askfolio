<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    name: "Emma Thompson",
    handle: "@emmaai",
    initials: "EM",
    text: "My AI portfolio answers questions 24/7. Game changer!"
  },
  {
    name: "David Park",
    handle: "@davidtech", 
    initials: "DA",
    text: "Created my portfolio in minutes. Recruiters are impressed."
  },
  {
    name: "Sofia Rodriguez",
    handle: "@sofiaml",
    initials: "SO", 
    text: "Recruiters love asking specific questions about my projects."
  },
  {
    name: "Marcus Chen",
    handle: "@marcusdesign",
    initials: "MC",
    text: "Interactive showcase opened so many new opportunities."
  },
  {
    name: "Alex Johnson",
    handle: "@alexcode",
    initials: "AJ",
    text: "AI understands my tech background perfectly. Amazing!"
  },
  {
    name: "Maria Santos",
    handle: "@mariamktg",
    initials: "MS",
    text: "Conversion rate increased 300%. Tool pays for itself."
  },
  {
    name: "James Wilson",
    handle: "@jamesstartup",
    initials: "JW",
    text: "Investors get instant answers. Revolutionized my pitch."
  },
  {
    name: "Lisa Chang",
    handle: "@lisapm",
    initials: "LC",
    text: "Makes it easy for teams to understand my complex projects."
  }
]

const scrollContainer = ref(null)
const isHovered = ref(false)
let animationFrame = null

const startAutoScroll = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const baseScrollStep = 0.25
  
  const scroll = () => {
    if (container && container.scrollWidth > container.clientWidth) {
      const scrollStep = isHovered.value ? baseScrollStep * 0.3 : baseScrollStep
      container.scrollLeft += scrollStep
      
      // Reset to beginning when we've scrolled past the first set
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }
    } else {
      console.log('Cannot scroll - container:', !!container, 'scrollWidth:', container?.scrollWidth, 'clientWidth:', container?.clientWidth)
    }
    animationFrame = requestAnimationFrame(scroll)
  }
  
  animationFrame = requestAnimationFrame(scroll)
}

const stopAutoScroll = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

onMounted(() => {
  // Start scrolling after a short delay to ensure DOM is ready
  setTimeout(() => {
    console.log('Scroll container:', scrollContainer.value)
    if (scrollContainer.value) {
      console.log('Container width:', scrollContainer.value.clientWidth)
      console.log('Scroll width:', scrollContainer.value.scrollWidth)
      console.log('Can scroll:', scrollContainer.value.scrollWidth > scrollContainer.value.clientWidth)
    }
    startAutoScroll()
  }, 200)
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section id="testimonials" class="py-24 text-center">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-5xl font-bold mb-4">Loved by professionals worldwide</h2>
      <p class="text-xl text-gray-600 mb-16">Join thousands who've transformed their online presence with an AI-powered portfolio</p>
      
      <div class="relative">
        <!-- Scroll container -->
        <div 
          ref="scrollContainer"
          class="testimonials-container"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div class="testimonials-content">
            <!-- First set of testimonials -->
            <TestimonialCard 
              v-for="testimonial in testimonials" 
              :key="`first-${testimonial.handle}`"
              :testimonial="testimonial"
            />
            
            <!-- Duplicate set for seamless loop -->
            <TestimonialCard 
              v-for="testimonial in testimonials" 
              :key="`second-${testimonial.handle}`"
              :testimonial="testimonial"
            />
          </div>
        </div>
        
        <!-- Left fade gradient -->
        <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        
        <!-- Right fade gradient -->
        <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-container {
  overflow-x: auto;
  overflow-y: visible;
  width: 100%;
  padding-bottom: 1.25rem; /* pb-5 */
}

.testimonials-content {
  display: flex;
  gap: 1rem; /* gap-4 */
  width: max-content;
}

/* Hide scrollbars */
.testimonials-container::-webkit-scrollbar {
  display: none;
}

.testimonials-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
