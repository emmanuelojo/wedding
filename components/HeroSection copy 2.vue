<template>
  <section
    ref="mainContainer"
    class="relative h-screen w-full overflow-hidden bg-[#FDFBF7] flex items-center justify-center"
  >
    <div
      ref="backgroundContent"
      class="absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-95 transition-all"
    >
      <h2 class="text-4xl font-serif text-slate-800">Our Story</h2>
    </div>

    <div class="relative w-full h-full flex items-center justify-center">
      <div
        class="side-img absolute top-10 left-[100px] w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-lg opacity-0"
        data-x-offset="-500"
        data-y-offset="400"
      >
        <img
          src="/assets/images/coffee.png"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="side-img absolute top-[300px] left-[170px] w-[230px] h-[160px] rounded-2xl overflow-hidden shadow-lg opacity-0"
        data-x-offset="-600"
        data-y-offset="450"
      >
        <img src="/assets/images/ring.png" class="w-full h-full object-cover" />
      </div>

      <div
        ref="centerImage"
        class="relative z-10 w-[95%] h-[95vh] shadow-2xl rounded-2xl overflow-hidden"
      >
        <img
          src="/assets/images/hero.png"
          alt="Favour ❤️ Freeman"
          class="w-full h-full object-cover text-[8px]"
        />

        <div
          ref="heroText"
          class="w-[90%] lg:w-full absolute inset-x-0 bottom-[10%] grid gap-4 pointer-events-none"
        >
          <h1
            class="lg:hidden text-center text-white text-5xl md:text-[100px] font-instrument drop-shadow-lg"
          >
            Favour
            <br />
            ❤️
            <br />
            Freeman
          </h1>
          <h1
            class="hidden lg:block text-center text-white text-5xl md:text-[100px] font-instrument drop-shadow-lg"
          >
            Favour ❤️ Freeman
          </h1>

          <p class="italic text-white text-xl text-center">
            Two hearts, one journey… forever begins here.
          </p>
          <p class="text-white text-sm text-center">
            We're so glad you're here 🤍 This space holds a piece of our
            story—our love, our journey, and everything you need to celebrate
            this beautiful season with us.
          </p>
          <p class="text-white text-sm text-center">
            What we share is intentional, grounded in faith, and filled with
            joy… and we cannot wait to begin this next chapter surrounded by
            you.
          </p>

          <div
            class="w-[95%] mx-auto flex items-center justify-between gap-10 pt-3 px-4 border-t border-[#FFFFFF90]"
          >
            <div class="text-white text-2xl animate-bounce">
              <ArrowDown />
            </div>

            <p class="text-xs lg:text-sm text-white uppercase">
              scroll down and journey with us
            </p>
          </div>
        </div>
      </div>

      <div
        class="side-img absolute bottom-[300px] right-[170px] w-[230px] h-[160px] rounded-2xl overflow-hidden shadow-lg opacity-0"
        data-x-offset="600"
        data-y-offset="450"
      >
        <img
          src="/assets/images/coffee.png"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="side-img absolute bottom-10 right-[100px] w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-lg opacity-0"
        data-x-offset="500"
        data-y-offset="500"
      >
        <img src="/assets/images/ring.png" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "@lucide/vue";

gsap.registerPlugin(ScrollTrigger);

const mainContainer = ref<HTMLElement | null>(null);
const centerImage = ref<HTMLElement | null>(null);
const heroText = ref<HTMLElement | null>(null);
const backgroundContent = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

// onMounted(() => {
//   ctx = gsap.context(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainContainer.value,
//         start: "top top",
//         end: "+=50%", // "+=200%",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // 1. Animate all side images inward/outward
//     // tl.fromTo(
//     //   centerImage.value,
//     //   {
//     //     scale: 1,
//     //     ease: "power2.outIn",
//     //   },
//     //   {
//     //     scale: 0.6,
//     //     width: "70%",
//     //     height: "860px",
//     //     duration: 1,
//     //     zIndex: 1,
//     //     borderRadius: "40px",
//     //     ease: "power2.inOut",
//     //   },
//     // );

//     // 1. Shrink the main image
//     tl.to(
//       centerImage.value,
//       {
//         scale: 0.6,
//         width: "70%",
//         height: "860px",
//         duration: 1,
//         borderRadius: "40px",
//         ease: "power2.inOut",
//       },
//       0,
//     );

//     // --- NEW: Animate the Hero Text ---
//     tl.to(
//       heroText.value,
//       {
//         opacity: 0, // Fade out
//         scale: 0.5, // Shrinkage / Zoom out effect
//         y: 50, // Optional: Slight downward drift for "depth"
//         duration: 0.8, // Finishes slightly before the image reaches 0.6 scale
//         ease: "power2.inOut",
//       },
//       0,
//     );

//     // 2. Animate all side images inward/outward
//     tl.fromTo(
//       ".side-img",
//       {
//         opacity: 0,
//         scale: 0.5,
//         x: (i, target) => target.dataset.xOffset || 0,
//         y: (i, target) => target.dataset.yOffset || 0,
//       },
//       {
//         opacity: 1,
//         scale: 1,
//         zIndex: 50,
//         x: 0, // Animate back to the original CSS 'left/right' position
//         y: 0, // Animate back to the original CSS 'top/bottom' position  duration: 1,
//         ease: "power2.out",
//       },
//       0.2, // 0, // Start at the same time as center image
//     );

//     // 3. Reveal background text
//     tl.to(
//       backgroundContent.value,
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//       },
//       0.2,
//     ); // Start slightly after the images begin moving
//   }, mainContainer.value!);
// });

onMounted(() => {
  ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      // ✅ Desktop only
      "(min-width: 1024px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.value,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Center image animation
        tl.to(
          centerImage.value,
          {
            scale: 0.6,
            width: "70%",
            height: "860px",
            duration: 1,
            borderRadius: "40px",
            ease: "power2.inOut",
          },
          0,
        );

        // Hero text
        tl.to(
          heroText.value,
          {
            opacity: 0,
            scale: 0.5,
            y: 50,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0,
        );

        // Side images
        tl.fromTo(
          ".side-img",
          {
            opacity: 0,
            scale: 0.5,
            x: (i, target) => target.dataset.xOffset || 0,
            y: (i, target) => target.dataset.yOffset || 0,
          },
          {
            opacity: 1,
            scale: 1,
            zIndex: 50,
            x: 0,
            y: 0,
            ease: "power2.out",
          },
          0.2,
        );

        // Background
        tl.to(
          backgroundContent.value,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          },
          0.2,
        );
      },

      // ✅ Mobile only
      "(max-width: 1023px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.value,
            start: "top top",
            end: "+=50%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Kill ALL transforms so layout stays clean
        gsap.set(centerImage.value, {
          clearProps: "all",
        });

        // gsap.set(heroText.value, {
        //   clearProps: "all",
        // });

        tl.to(
          heroText.value,
          {
            opacity: 0,
            scale: 0.5,
            y: 50,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0,
        );

        // Optional: ensure background visible or not
        gsap.set(backgroundContent.value, {
          opacity: 1,
        });
      },
    });
  }, mainContainer.value!);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>
