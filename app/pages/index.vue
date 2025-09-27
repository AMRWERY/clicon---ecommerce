<template>
  <div>
    <div class="border-b pb-2">
      <!-- Small screens layout -->
      <div class="block lg:hidden p-4">
        <!-- First row: categories-menu and phone -->
        <div class="flex items-center justify-between mb-4">

          <!-- categories-menu component -->
          <categories-menu />

          <div class="flex items-center justify-center gap-2">
            <icon name="solar:phone-calling-linear"></icon>
            <p class="text-sm font-semibold">(+20) 1022655742</p>
          </div>
        </div>

        <!-- Second section: 4 navigation links in flex row -->
        <div class="flex items-center justify-between gap-2">
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mingcute:location-2-line"></icon>
            <p class="font-semibold text-xs">{{ t('home.track_order') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="iconamoon:synchronize"></icon>
            <p class="font-semibold text-xs">{{ t('home.compare') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mdi:support"></icon>
            <p class="font-semibold text-xs">{{ t('home.customer_support') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="tabler:help"></icon>
            <p class="font-semibold text-xs">{{ t('home.need_help') }}</p>
          </nuxt-link>
        </div>
      </div>

      <!-- Large screens layout (original) -->
      <div class="hidden lg:flex items-center justify-between p-2">
        <div class="flex items-center gap-6">
          <categories-menu />
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mingcute:location-2-line"></icon>
            <p class="font-semibold">{{ t('home.track_order') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="iconamoon:synchronize"></icon>
            <p class="font-semibold">{{ t('home.compare') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mdi:support"></icon>
            <p class="font-semibold">{{ t('home.customer_support') }}</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="tabler:help"></icon>
            <p class="font-semibold">{{ t('home.need_help') }}</p>
          </nuxt-link>
        </div>
        <div class="flex items-center justify-center gap-2">
          <icon name="solar:phone-calling-linear"></icon>
          <p class="text-base font-semibold">(+20) 1022655742</p>
        </div>
      </div>
    </div>

    <hero-banner />

    <best-deals />

    <shop-with-categories :categories="productCategories" />

    <featured-products />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const productCategories = ref([
  { name: t('categories.computer_laptop'), image: '/img/computer.png' },
  { name: t('categories.smartphone'), image: '/img/smartphone.png' },
  { name: t('categories.headphones'), image: '/img/headphones.png' },
  { name: t('categories.accessories'), image: '/img/accessories.png' },
  { name: t('categories.camera_photo'), image: '/img/camera.png' },
  { name: t('categories.tv_homes'), image: '/img/tv.png' },
]);
</script>