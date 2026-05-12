<template>
  <section id="our-story" class="relative py-24 md:py-32 bg-stone-950">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div ref="headerRef" class="text-center mb-20">
        <span class="section-number block mb-4">01</span>
        <h2 class="section-title">Our Love Story</h2>
        <div class="w-16 h-px bg-gold-500/40 mx-auto mt-6" />
      </div>

      <div class="relative">
        <div class="hidden md:block timeline-line" />

        <TimelineItem
          v-for="(item, index) in timelineItems"
          :key="item.year"
          v-bind="item"
          :is-reversed="index % 2 !== 0"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const { elementRef: headerRef } = useScrollReveal(0.3)

const timelineItems = [
  {
    year: '2019',
    title: 'The First Meeting',
    description: "It all began at a mutual friend's birthday party in Victoria Island. Tems spilled her drink on Dave's shoes, and the rest is history.",
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80'
  },
  {
    year: '2020',
    title: 'Love in Lockdown',
    description: 'When the world paused, our love accelerated. Countless video calls, care packages, and the realization that distance truly makes the heart grow fonder.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80'
  },
  {
    year: '2023',
    title: 'Building Dreams',
    description: "We moved in together and turned a house into a home. Late-night talks, shared playlists, and planning a future we couldn't wait to begin.",
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80'
  },
  {
    year: '2024',
    title: 'The Proposal',
    description: "Under a canopy of stars at Eko Atlantic, Dave got down on one knee. Tems said yes before he could finish asking. The ring fit perfectly.",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'
  }
]
</script>
