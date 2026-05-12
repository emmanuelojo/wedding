<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&q=80"
        alt="Couple on beach"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-stone-950/60" />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6">
      <p
        ref="subtitleRef"
        class="text-gold-400/70 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 opacity-0"
        :class="{ 'animate-fade-in': isLoaded }"
        style="animation-delay: 0.3s"
      >
        Together Forever
      </p>

      <h1
        ref="titleRef"
        class="font-serif text-6xl md:text-8xl lg:text-9xl text-cream-100 tracking-wide mb-4 opacity-0"
        :class="{ 'animate-scale-in': isLoaded }"
        style="animation-delay: 0.5s"
      >
        <span class="inline-block">Tems</span>
        <span class="text-gold-400 mx-2 md:mx-4">&</span>
        <span class="inline-block">Dave</span>
      </h1>

      <div
        ref="dateRef"
        class="opacity-0"
        :class="{ 'animate-fade-in-up': isLoaded }"
        style="animation-delay: 0.9s"
      >
        <p class="text-cream-200/80 font-serif text-lg md:text-xl tracking-[0.2em] mt-8">
          September 20, 2026
        </p>
        <p class="text-cream-300/50 text-sm tracking-[0.3em] uppercase mt-2">
          Lagos, Nigeria
        </p>
      </div>

      <div
        ref="scrollIndicatorRef"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
        :class="{ 'animate-fade-in': isLoaded }"
        style="animation-delay: 1.5s"
      >
        <div class="flex flex-col items-center gap-2">
          <span class="text-cream-300/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div class="w-px h-8 bg-gradient-to-b from-gold-400/50 to-transparent animate-pulse-slow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>
