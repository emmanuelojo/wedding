<template>
  <div
    ref="elementRef"
    class="glass-card rounded-2xl p-8 md:p-10 text-center transition-all duration-700 hover:border-gold-500/30 group"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <div class="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
      <component :is="icon" class="w-8 h-8 text-gold-400 transition-transform duration-500 group-hover:scale-110" />
    </div>

    <h3 class="font-serif text-xl md:text-2xl text-cream-100 mb-4">{{ title }}</h3>

    <div class="space-y-2 text-sm">
      <p class="text-gold-400/80 font-medium">{{ date }}</p>
      <p class="text-cream-300/60">{{ time }}</p>
      <p class="text-cream-200/80 font-medium mt-3">{{ venue }}</p>
      <p class="text-cream-300/50 text-xs">{{ address }}</p>
    </div>

    <div class="w-8 h-px bg-gold-500/30 mx-auto mt-6" />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import type { Component } from 'vue'

interface Props {
  icon: Component
  title: string
  date: string
  time: string
  venue: string
  address: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})

const { elementRef, isVisible } = useScrollReveal(0.2)
</script>
