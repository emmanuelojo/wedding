<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
      isScrolled
        ? 'bg-[#E8D4C4]/20 backdrop-blur-md py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
    >
      <NuxtLink
        to="#"
        class="font-serif text-xl text-[#C8A2C8] tracking-[0.15em]"
      >
        F <span class="text-olive-600">&</span> F
      </NuxtLink>

      <div class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-xs tracking-[0.2em] uppercase text-[#C8A2C8] transition-colors duration-300"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <button
        class="md:hidden text-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#E8D4C4]/20 backdrop-blur-md border-t border-[#E8D4C4]/30 py-6 px-6"
      >
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="text-sm tracking-[0.2em] uppercase text-[#C8A2C8] transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Our Story", href: "#our-story" },
  { label: "Details", href: "#details" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
