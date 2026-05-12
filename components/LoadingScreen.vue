<template>
  <Transition
    enter-active-class="transition-opacity duration-700"
    leave-active-class="transition-opacity duration-700"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950"
    >
      <div class="text-center">
        <h1
          class="font-serif text-5xl md:text-6xl text-cream-100 tracking-[0.2em] mb-6"
        >
          F <span class="text-gold-400">&</span> F
        </h1>
        <div class="w-24 h-px bg-gold-500/50 mx-auto mb-6" />
        <p
          class="text-gold-400/60 text-xs tracking-[0.4em] uppercase animate-pulse"
        >
          Loading our love story...
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoading: boolean;
}>();
</script>
