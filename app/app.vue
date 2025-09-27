<template>
  <div>
    <ClientOnly>
      <div :class="{ 'rtl': localeStore.isRTL }" class="min-h-screen flex flex-col">

        <!-- hot-sale component -->
        <hot-sale />

        <!-- navbar component -->
        <navbar />

        <nuxt-layout>
          <!-- cookies-popup component -->
          <!-- <cookies-popup /> -->

          <div class="flex flex-col min-h-screen">
            <main class="flex-1 flex-grow px-4 md:px-8">
              <!-- overlay component -->
              <overlay :visibleForLocales="localeStore.isOverlayVisible"
                :visibleForCountries="countryStore.isOverlayVisible" />

              <!-- progress-bar component -->
              <progress-bar />

              <nuxt-page />

              <!-- support-chat-dialog component -->
              <support-chat-dialog />

              <!-- scroll-to-top component -->
              <scroll-to-top />
            </main>
          </div>

          <!-- footer component -->
          <Footer class="mt-auto" />
        </nuxt-layout>

        <!-- dynamic-toast component -->
        <teleport to='body'>
          <div class="fixed z-[9999] pointer-events-none top-10 start-1/2 -translate-x-1/2 w-full max-w-xs">
            <div class="pointer-events-auto flex justify-center">
              <dynamic-toast v-if="showToast" :message="toastMessage" :toastType="toastType" :duration="toastDuration"
                :toastIcon="toastIcon" @toastClosed="showToast = false" />
            </div>
          </div>
        </teleport>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
// const route = useRoute();

// const isHome = computed(() => route.meta.layout === 'auth' || route.meta.layout === 'dashnoard');

const { showToast, toastMessage, toastType, toastIcon, toastDuration } = useToast()

const localeStore = useLocaleStore()
const countryStore = useCountryStore();

onMounted(() => {
  localeStore.loadLocale()
  countryStore.initializeCountry();
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>