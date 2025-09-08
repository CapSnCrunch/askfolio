<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 w-64 flex gap-3 items-start text-left flex-shrink-0">
    <div class="w-10 h-10 bg-gradient-blue-green text-white rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0">
      {{ testimonial.initials }}
    </div>
    <div class="min-w-0 flex-1">
      <div class="font-semibold mb-1 text-sm">{{ testimonial.name }}</div>
      <div class="text-gray-600 text-xs mb-2">{{ testimonial.handle }}</div>
      <div class="text-gray-600 leading-relaxed text-sm">{{ testimonial.text }}</div>
    </div>
  </div>
</template>
