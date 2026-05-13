<template>
  <section id="rsvp" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80"
        alt="Background"
        class="w-full h-full object-cover opacity-15"
      />
      <div class="absolute inset-0 bg-black/85" />
    </div>

    <div class="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
      <div ref="headerRef" class="text-center mb-16">
        <span class="section-number block mb-4">04</span>
        <h2 class="section-title">Join Us</h2>
        <div class="w-16 h-px bg-olive-600/40 mx-auto mt-6 mb-6" />
        <p class="text-white/60 font-serif text-lg">
          We would be honored by your presence
        </p>
      </div>

      <form ref="formRef" class="space-y-8" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            "
            style="transition-delay: 100ms"
          >
            <label
              class="block text-white/50 text-xs tracking-[0.2em] uppercase mb-2"
              >Full Name</label
            >
            <input
              v-model="form.name"
              type="text"
              class="input-field"
              placeholder="Your full name"
              required
            />
          </div>

          <div
            class="transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            "
            style="transition-delay: 200ms"
          >
            <label
              class="block text-white/50 text-xs tracking-[0.2em] uppercase mb-2"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              class="input-field"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            "
            style="transition-delay: 300ms"
          >
            <label
              class="block text-white/50 text-xs tracking-[0.2em] uppercase mb-2"
              >Will You Attend?</label
            >
            <select
              v-model="form.attending"
              class="input-field cursor-pointer"
              required
            >
              <option value="" disabled class="bg-nude-500/20">
                Select an option
              </option>
              <option value="yes" class="bg-nude-500/20">
                Joyfully Accept
              </option>
              <option value="no" class="bg-nude-500/20">
                Regretfully Decline
              </option>
            </select>
          </div>

          <div
            class="transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            "
            style="transition-delay: 400ms"
          >
            <label
              class="block text-white/50 text-xs tracking-[0.2em] uppercase mb-2"
              >Number of Guests</label
            >
            <input
              v-model.number="form.guests"
              type="number"
              min="1"
              max="5"
              class="input-field"
              placeholder="1"
            />
          </div>
        </div>

        <div
          class="transition-all duration-700"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          "
          style="transition-delay: 500ms"
        >
          <label
            class="block text-white/50 text-xs tracking-[0.2em] uppercase mb-2"
            >A Message for the Couple (Optional)</label
          >
          <textarea
            v-model="form.message"
            rows="3"
            class="input-field resize-none"
            placeholder="Share your warm wishes..."
          />
        </div>

        <div
          class="transition-all duration-700 pt-4"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          "
          style="transition-delay: 600ms"
        >
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-olive-600 hover:bg-olive-600/90 text-white font-medium py-4 px-8 rounded-lg tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-olive-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <span v-if="!isSubmitting && !isSubmitted">Send RSVP</span>
            <span v-else-if="isSubmitting">Sending...</span>
            <span v-else>RSVP Sent!</span>
            <svg
              v-if="!isSubmitting && !isSubmitted"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <svg
              v-else-if="isSubmitted"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useScrollReveal } from "~/composables/useScrollReveal";

const { elementRef: headerRef } = useScrollReveal(0.3);
const { elementRef: formRef, isVisible } = useScrollReveal(0.15);

const form = reactive({
  name: "",
  email: "",
  attending: "",
  guests: 1,
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  isSubmitting.value = false;
  isSubmitted.value = true;

  // Reset after showing success
  setTimeout(() => {
    isSubmitted.value = false;
    form.name = "";
    form.email = "";
    form.attending = "";
    form.guests = 1;
    form.message = "";
  }, 3000);
};
</script>
