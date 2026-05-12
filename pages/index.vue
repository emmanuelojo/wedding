<template>
  <div>
    <LoadingScreen :is-loading="isLoading" />

    <div v-show="!isLoading">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <WeddingDetails />
      <CountdownTimer />
      <GallerySection />
      <RsvpForm />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

useHead({
  title: `Favour & Freeman | We're Getting Married`,
  meta: [
    {
      name: "description",
      content:
        "Join us in celebrating the wedding of Favour and Freeman on July 18, 2026 in Jos Plateau State, Nigeria.",
    },
    { property: "og:title", content: "Favour & Freeman | Wedding Invitation" },
    {
      property: "og:description",
      content: "Join us in celebrating our love on July 18, 2026",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
