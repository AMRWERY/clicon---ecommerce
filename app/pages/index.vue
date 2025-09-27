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
            <p class="font-semibold text-xs">Track Order</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="iconamoon:synchronize"></icon>
            <p class="font-semibold text-xs">Compare</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mdi:support"></icon>
            <p class="font-semibold text-xs">Customer Support</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="tabler:help"></icon>
            <p class="font-semibold text-xs">Need Help</p>
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
            <p class="font-semibold">Track Order</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="iconamoon:synchronize"></icon>
            <p class="font-semibold">Compare</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="mdi:support"></icon>
            <p class="font-semibold">Customer Support</p>
          </nuxt-link>
          <nuxt-link to=""
            class="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 active:text-gray-800">
            <icon name="tabler:help"></icon>
            <p class="font-semibold">Need Help</p>
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
const productCategories = ref([
  { name: 'Computer & Laptop', image: '/img/computer.png' },
  { name: 'SmartPhone', image: '/img/smartphone.png' },
  { name: 'Headphones', image: '/img/headphones.png' },
  { name: 'Accessories', image: '/img/accessories.png' },
  { name: 'Camera & Photo', image: '/img/camera.png' },
  { name: 'TV & Homes', image: '/img/tv.png' },
]);
</script>