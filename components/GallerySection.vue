<template>
  <section id="gallery" class="relative py-24 md:py-32 bg-stone-950 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div ref="headerRef" class="text-center mb-16">
        <span class="section-number block mb-4">03</span>
        <h2 class="section-title">Moments Together</h2>
        <div class="w-16 h-px bg-gold-500/40 mx-auto mt-6" />
      </div>

      <!-- Horizontal scrolling gallery -->
      <div
        ref="galleryRef"
        class="relative"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <div
          ref="scrollContainer"
          class="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
          style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch;"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="endDrag"
        >
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="flex-shrink-0 transition-all duration-500"
            :class="[
              index === 0 || index === galleryImages.length - 1 ? 'w-64 md:w-80' : 'w-72 md:w-96',
              'opacity-0 translate-y-8'
            ]"
            :style="{ 
              transitionDelay: `${index * 100}ms`,
              animation: isVisible ? `fadeInUp 0.7s ease-out ${index * 0.1}s forwards` : 'none'
            }"
          >
            <div class="relative overflow-hidden rounded-xl aspect-[3/4] group">
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable="false"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <!-- Scroll hint -->
        <div
          v-if="isHovering"
          class="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center pointer-events-none"
        >
          <div class="w-10 h-10 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
            <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)
const galleryRef = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const isHovering = ref(false)

// Drag to scroll
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
  startX.value = pageX - (scrollContainer.value?.offsetLeft || 0)
  scrollLeft.value = scrollContainer.value?.scrollLeft || 0
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !scrollContainer.value) return
  e.preventDefault()
  const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
  const x = pageX - (scrollContainer.value.offsetLeft || 0)
  const walk = (x - startX.value) * 1.5
  scrollContainer.value.scrollLeft = scrollLeft.value - walk
}

const endDrag = () => {
  isDragging.value = false
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Couple moment 1' },
  { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80', alt: 'Couple moment 2' },
  { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80', alt: 'Couple moment 3' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Couple moment 4' },
  { src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&q=80', alt: 'Couple moment 5' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Couple moment 6' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', alt: 'Couple moment 7' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', alt: 'Couple moment 8' }
]

onMounted(() => {
  // Auto-detect visibility for gallery items
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  if (galleryRef.value) {
    observer.observe(galleryRef.value)
  }
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
