<template>
  <Transition
    enter-active-class="transition-opacity duration-700"
    leave-active-class="transition-opacity duration-700"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-f-cream-500"
    >
      <div class="text-center">
        <h1
          class="font-serif text-5xl md:text-6xl text-[#3D3D3D] tracking-[0.2em] mb-6"
        >
          F <span class="text-[#6B7B3D]">&</span> F
        </h1>
        <div class="w-24 h-px bg-[#6B7B3D]/60 mx-auto mb-6" />
        <p
          class="text-[#6B7B3D]/60 text-xs tracking-[0.4em] uppercase animate-pulse"
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
