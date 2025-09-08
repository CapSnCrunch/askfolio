<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

// FAQ state management
const openFAQ = ref(null)

const toggleFAQ = (index) => {
  openFAQ.value = openFAQ.value === index ? null : index
}

// Animation handlers for better height transitions
const onEnter = (el) => {
  el.style.height = '0'
  el.offsetHeight // trigger reflow
  el.style.height = el.scrollHeight + 'px'
}

const onLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight // trigger reflow
  el.style.height = '0'
}

const faqItems = [
  {
    question: "What is AskFolio?",
    answer: "AskFolio transforms your traditional portfolio into an AI-powered, conversational experience that can answer questions about your work 24/7."
  },
  {
    question: "How does the AI portfolio work?",
    answer: "Upload your resume, add project details, and our AI creates a knowledge base. Visitors can then chat with your AI twin to learn about your experience."
  },
  {
    question: "Can I customize my portfolio?",
    answer: "Yes! You control what information is public, can customize the design, and even use your own domain."
  },
  {
    question: "Is AskFolio free?",
    answer: "We offer a generous free tier. Pro plans unlock custom domains, advanced analytics, and priority support."
  },
  {
    question: "How quickly can I create my portfolio?",
    answer: "Most users have their AI portfolio live within 10-15 minutes of uploading their information."
  },
  {
    question: "Can recruiters and clients use it?",
    answer: "Absolutely! It's designed specifically for professional networking, job hunting, and client acquisition."
  }
]
</script>

<template>
  <section id="faq" class="py-24 bg-gray-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-5xl font-bold text-center mb-16">Frequently asked questions</h2>
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqItems" 
          :key="index"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <button 
            @click="toggleFAQ(index)"
            class="w-full px-6 py-6 font-semibold text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span>{{ faq.question }}</span>
            <ChevronDown 
              :size="20" 
              class="transition-transform duration-300 ease-in-out"
              :class="{ 'rotate-180': openFAQ === index }"
            />
          </button>
          <Transition
            name="slide-down"
            @enter="onEnter"
            @leave="onLeave"
          >
            <div v-show="openFAQ === index" class="overflow-hidden">
              <p class="px-6 pb-6 text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom slide-down animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
