<template>
  <section
    ref="heroSection"
    class="relative w-full overflow-hidden"
    :style="{ height: heroHeight + 'px' }"
  >
    <!-- Main Center Image (fixed/sticky) -->
    <div
      ref="mainImageContainer"
      class="absolute inset-0 flex items-center justify-center z-10"
    >
      <div
        ref="mainImageWrapper"
        class="relative w-full h-full md:w-[70%] md:h-[85%] overflow-hidden rounded-none md:rounded-[2rem]"
      >
        <img
          ref="mainImage"
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80"
          alt="Jim proposing to Pam in the mountains"
          class="w-full h-full object-cover"
        />

        <!-- Dark overlay on main image -->
        <div class="absolute inset-0 bg-black/20" />

        <!-- Names overlay -->
        <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <h1
            ref="namesText"
            class="font-serif text-white text-center select-none"
            style="font-size: clamp(3rem, 12vw, 10rem); line-height: 1; text-shadow: 0 4px 30px rgba(0,0,0,0.3);"
          >
            Jim <span class="italic">&</span> Pam
          </h1>
        </div>
      </div>
    </div>

    <!-- Side Images (desktop only) -->
    <div class="hidden md:block">
      <!-- Top Left Image -->
      <div
        ref="sideTL"
        class="side-image absolute z-20 overflow-hidden rounded-[1.5rem]"
        style="top: 5%; left: 2%; width: 22%; aspect-ratio: 4/3;"
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
          alt="Beach sunset"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Bottom Left Image -->
      <div
        ref="sideBL"
        class="side-image absolute z-20 overflow-hidden rounded-[1.5rem]"
        style="bottom: 8%; left: 3%; width: 20%; aspect-ratio: 3/4;"
      >
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80"
          alt="Couple dancing"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Top Right Image -->
      <div
        ref="sideTR"
        class="side-image absolute z-20 overflow-hidden rounded-[1.5rem]"
        style="top: 10%; right: 2%; width: 18%; aspect-ratio: 3/4;"
      >
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80"
          alt="Couple portrait"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Bottom Right Image -->
      <div
        ref="sideBR"
        class="side-image absolute z-20 overflow-hidden rounded-[1.5rem]"
        style="bottom: 5%; right: 3%; width: 22%; aspect-ratio: 4/3;"
      >
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
          alt="Adventure together"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-12 pb-6 md:pb-8">
      <!-- Scroll indicator -->
      <div class="flex flex-col items-center gap-2 text-white/60">
        <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <p class="text-white/50 text-[10px] md:text-xs tracking-[0.3em] uppercase">
        Scroll to explore
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref<HTMLElement | null>(null)
const mainImageContainer = ref<HTMLElement | null>(null)
const mainImageWrapper = ref<HTMLElement | null>(null)
const mainImage = ref<HTMLImageElement | null>(null)
const namesText = ref<HTMLElement | null>(null)
const sideTL = ref<HTMLElement | null>(null)
const sideBL = ref<HTMLElement | null>(null)
const sideTR = ref<HTMLElement | null>(null)
const sideBR = ref<HTMLElement | null>(null)

const heroHeight = ref(0)
let ctx: gsap.Context | null = null

const calculateHeight = () => {
  // Hero is 100vh + extra scroll distance for the parallax effect
  heroHeight.value = window.innerHeight + window.innerHeight * 0.8
}

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  calculateHeight()
  window.addEventListener('resize', calculateHeight)

  ctx = gsap.context(() => {
    // Initial states for side images (off-screen)
    const sideImages = [
      { el: sideTL.value, fromX: '-120%', fromY: '-120%' },
      { el: sideBL.value, fromX: '-120%', fromY: '120%' },
      { el: sideTR.value, fromX: '120%', fromY: '-120%' },
      { el: sideBR.value, fromX: '120%', fromY: '120%' }
    ]

    sideImages.forEach(({ el, fromX, fromY }) => {
      if (!el) return
      gsap.set(el, { x: fromX, y: fromY, opacity: 0, scale: 0.8 })
    })

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        pin: mainImageContainer.value,
        pinSpacing: false
      }
    })

    // 1. Side images fly in (0% - 30% of scroll)
    sideImages.forEach(({ el }, i) => {
      if (!el) return
      tl.to(el, {
        x: '0%',
        y: '0%',
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, i * 0.02)
    })

    // 2. Main image shrinks and side images spread out (30% - 70%)
    tl.to(mainImageWrapper.value, {
      width: '55%',
      height: '70%',
      borderRadius: '3rem',
      duration: 0.4,
      ease: 'power2.inOut'
    }, 0.3)

    // Side images spread further apart
    tl.to(sideTL.value, { x: '-10%', y: '-10%', duration: 0.4 }, 0.3)
    tl.to(sideBL.value, { x: '-10%', y: '10%', duration: 0.4 }, 0.3)
    tl.to(sideTR.value, { x: '10%', y: '-10%', duration: 0.4 }, 0.3)
    tl.to(sideBR.value, { x: '10%', y: '10%', duration: 0.4 }, 0.3)

    // 3. Everything fades out and scales down (70% - 100%)
    tl.to([mainImageWrapper.value, sideTL.value, sideBL.value, sideTR.value, sideBR.value], {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: 'power2.in'
    }, 0.7)

    // Text parallax - moves up slower than scroll
    gsap.to(namesText.value, {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    })

    // Main image subtle zoom
    gsap.to(mainImage.value, {
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    })
  }, heroSection.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight)
  ctx?.revert()
})
</script>

<style scoped>
.side-image {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.side-image img {
  transition: transform 0.6s ease;
}

.side-image:hover img {
  transform: scale(1.05);
}
</style>
