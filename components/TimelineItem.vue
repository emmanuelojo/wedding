<template>
  <div
    ref="elementRef"
    class="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12"
  >
    <!-- Timeline dot (desktop) -->
    <div class="hidden md:block timeline-dot top-1/2 -translate-y-1/2 z-10" />

    <!-- Content -->
    <div
      :class="[
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        isReversed ? 'md:order-2 md:text-left' : 'md:text-right',
      ]"
      :style="{ transitionDelay: `${delay}ms` }"
    >
      <div
        :class="[
          'glass-card rounded-2xl p-6 md:p-8',
          isReversed ? 'md:ml-8' : 'md:mr-8',
        ]"
      >
        <span class="text-[#6B7B3D]/60 font-serif text-sm">{{ year }}</span>
        <h3 class="font-serif text-2xl md:text-3xl text-white mt-2 mb-3">
          {{ title }}
        </h3>
        <p class="text-white/60 text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Image -->
    <div
      :class="[
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        isReversed ? 'md:order-1' : '',
      ]"
      :style="{ transitionDelay: `${delay + 200}ms` }"
    >
      <div class="relative overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from "~/composables/useScrollReveal";

interface Props {
  year: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
  delay?: number;
}

withDefaults(defineProps<Props>(), {
  isReversed: false,
  delay: 0,
});

const { elementRef, isVisible } = useScrollReveal(0.2);
</script>
