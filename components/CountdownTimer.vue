<template>
  <section class="relative py-20 md:py-28 overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        alt="Background"
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-stone-950/80" />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h3
        ref="titleRef"
        class="font-serif text-3xl md:text-4xl text-cream-100 mb-12 tracking-wide"
      >
        Counting Down to Forever
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(unit, index) in timeUnits"
          :key="unit.label"
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="glass-card rounded-xl py-6 px-4">
            <span class="font-serif text-4xl md:text-5xl text-gold-400">{{ unit.value }}</span>
            <p class="text-cream-300/50 text-xs tracking-[0.2em] uppercase mt-2">{{ unit.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const weddingDate = new Date('2026-09-20T11:00:00')
const now = ref(new Date())
let interval: ReturnType<typeof setInterval>

const { elementRef: titleRef, isVisible } = useScrollReveal(0.3)

const timeUnits = computed(() => {
  const diff = weddingDate.getTime() - now.value.getTime()

  if (diff <= 0) {
    return [
      { value: '00', label: 'Days' },
      { value: '00', label: 'Hours' },
      { value: '00', label: 'Minutes' },
      { value: '00', label: 'Seconds' }
    ]
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return [
    { value: String(days).padStart(2, '0'), label: 'Days' },
    { value: String(hours).padStart(2, '0'), label: 'Hours' },
    { value: String(minutes).padStart(2, '0'), label: 'Minutes' },
    { value: String(seconds).padStart(2, '0'), label: 'Seconds' }
  ]
})

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
