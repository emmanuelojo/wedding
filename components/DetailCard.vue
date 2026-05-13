<template>
  <div
    ref="elementRef"
    class="glass-card rounded-2xl p-8 md:p-10 text-center transition-all duration-700 hover:border-lilac-500/30 group"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <div class="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
      <component
        :is="icon"
        class="w-8 h-8 text-olive-600 transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <h3 class="font-serif text-xl md:text-2xl text-white mb-4">
      {{ title }}
    </h3>

    <div class="space-y-2 text-sm">
      <p class="text-olive-600/80 font-medium">{{ date }}</p>
      <p class="text-white/60">{{ time }}</p>
      <p class="text-white/80 font-medium mt-3">{{ venue }}</p>
      <p class="text-white/50 text-xs">{{ address }}</p>
    </div>

    <div class="w-8 h-px bg-olive-600/30 mx-auto mt-6" />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from "~/composables/useScrollReveal";
import type { Component } from "vue";

interface Props {
  icon: Component;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  delay?: number;
}

withDefaults(defineProps<Props>(), {
  delay: 0,
});

const { elementRef, isVisible } = useScrollReveal(0.2);
</script>
