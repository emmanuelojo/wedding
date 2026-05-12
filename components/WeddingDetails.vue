<template>
  <section id="details" class="relative py-24 md:py-32 bg-stone-950">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div ref="headerRef" class="text-center mb-20">
        <span class="section-number block mb-4">02</span>
        <h2 class="section-title">Wedding Details</h2>
        <div class="w-16 h-px bg-gold-500/40 mx-auto mt-6" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <DetailCard
          v-for="(detail, index) in details"
          :key="detail.title"
          v-bind="detail"
          :delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import DetailCard from './DetailCard.vue'

const { elementRef: headerRef } = useScrollReveal(0.3)

const CeremonyIcon = {
  render: () => h('svg', { class: 'w-8 h-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' })
  ])
}

const ReceptionIcon = {
  render: () => h('svg', { class: 'w-8 h-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
  ])
}

const DressCodeIcon = {
  render: () => h('svg', { class: 'w-8 h-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
  ])
}

const details = [
  {
    icon: CeremonyIcon,
    title: 'The Ceremony',
    date: 'Saturday, September 20, 2026',
    time: '11:00 AM',
    venue: "St. Paul's Anglican Church",
    address: '15 Churchgate Street, Victoria Island, Lagos'
  },
  {
    icon: ReceptionIcon,
    title: 'The Reception',
    date: 'Saturday, September 20, 2026',
    time: '2:00 PM - 9:00 PM',
    venue: 'Eko Hotel & Suites',
    address: '1415 Adeola Odeku Street, Victoria Island'
  },
  {
    icon: DressCodeIcon,
    title: 'Dress Code',
    date: 'Formal / Traditional',
    time: '',
    venue: 'Ceremony: White and champagne tones',
    address: 'Reception: Aso Ebi colors - Coral & Gold. Please avoid all-black attire.'
  }
]
</script>
