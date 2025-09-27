<template>
  <div>
    <footer class="bg-white">
      <!-- Section 1: Newsletter Signup -->
      <div class="bg-[#1B6392]">
        <div class="container mx-auto px-4 py-12 text-center text-white">
          <h2 class="text-3xl font-bold mb-2">{{ t('footer.subscribe_to_our_newsletter') }}</h2>
          <p class="text-blue-200 max-w-2xl mx-auto mb-6">
            {{ t('footer.subscribe_to_our_newsletter_desc') }}
          </p>

          <!-- Email Form -->
          <form class="flex justify-center max-w-lg mx-auto mb-8">
            <input type="email" :placeholder="t('form.enter_email_address')"
              class="w-full rounded-s-lg p-3 text-gray-800 focus:outline-none">
            <button type="submit"
              class="bg-orange-500 text-white font-bold p-3 rounded-e-lg flex items-center hover:bg-orange-600">
              {{ t('btn.subscribe') }}
              <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180" />
            </button>
          </form>

          <!-- Partner Logos -->
          <div class="flex justify-center items-center space-s-8 text-gray-200">
            <nuxt-link to=""
              class="relative inline-block hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer">
              {{ t('footer.google') }}
            </nuxt-link>
            <nuxt-link to=""
              class="relative inline-block hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer">
              {{ t('footer.amazon') }}
            </nuxt-link>
            <nuxt-link to=""
              class="relative inline-block hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer">
              {{ t('footer.philips') }}
            </nuxt-link>
            <nuxt-link to=""
              class="relative inline-block hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer">
              {{ t('footer.toshiba') }}
            </nuxt-link>
            <nuxt-link to=""
              class="relative inline-block hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer">
              {{ t('footer.samsung') }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="bg-[#232323] text-gray-400">
        <div class="mx-auto px-4 py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-1">
              <div class="flex items-center mb-6">
                <img src="/svg/clicon-logo-footer.svg" alt="clicon-logo-footer" class="h-10 w-10">
                <span class="text-3xl font-bold text-white ms-3">CLICON</span>
              </div>
              <p class="text-sm mb-2">{{ t('footer.customer_support') }}</p>
              <p class="text-lg text-white font-semibold mb-4">(+20) 1022655742</p>
              <p class="text-sm leading-relaxed mb-4">
                {{ t('footer.washington_ave') }}<br>
                {{ t('footer.manchester_kentucky') }}
              </p>
              <nuxt-link to="" class="text-sm text-white font-semibold hover:underline">info@kinbo.com</nuxt-link>
            </div>

            <div class="lg:col-span-1">
              <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-6">{{ t('footer.top_category') }}</h4>
              <ul class="space-y-4 text-sm">
                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.computer_laptop') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.smartphone') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.headphones') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.accessories') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.camera_photo') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="group relative pe-5 transition-colors hover:text-yellow-400 cursor-pointer">
                    <span
                      class="absolute end-0 top-1/2 -translate-y-1/2 h-0.5 w-3 bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {{ t('categories.tv_homes') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="" class="flex items-center text-yellow-400 font-semibold hover:underline">
                    {{ t('btn.browse_all_product') }}
                    <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180" />
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <!-- Column 3: Quick Links -->
            <div class="lg:col-span-1">
              <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-6">{{ t('footer.quick_links') }}</h4>
              <ul class="space-y-4 text-sm">
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.shop_product')
                    }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{
                    t('footer.shopping_cart') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.wishlist')
                    }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.compare')
                    }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.track_order')
                    }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{
                    t('footer.customer_help') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.about_us')
                    }}</nuxt-link>
                </li>
              </ul>
            </div>

            <!-- Column 4 & 5 Combined -->
            <div class="lg:col-span-1">
              <!-- Download App -->
              <div class="mb-8">
                <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-6">{{ t('footer.download_app') }}
                </h4>
                <div class="space-y-3">
                  <nuxt-link to="" type="button"
                    class="flex items-center bg-[#2b2b2b] p-4 rounded-lg hover:bg-gray-700 transition-colors w-48 cursor-pointer">
                    <img src="/svg/google-play-icon.svg" alt="google-play" class="h-8 w-8">
                    <div class="ms-3">
                      <p class="text-xs text-gray-300">{{ t('footer.get_it_now') }}</p>
                      <p class="text-sm font-semibold text-white">{{ t('footer.google_play') }}</p>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="" type="button"
                    class="flex items-center bg-[#2b2b2b] p-4 rounded-lg hover:bg-gray-700 transition-colors w-48 cursor-pointer">
                    <img src="/svg/app-store-icon.svg" alt="app-store" class="h-8 w-8">
                    <div class="ms-3">
                      <p class="text-xs text-gray-300">{{ t('footer.get_it_now') }}</p>
                      <p class="text-sm font-semibold text-white">{{ t('footer.app_store') }}</p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div class="lg:col-span-1">
              <div>
                <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-6">{{ t('footer.popular_tag') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <router-link to="" type="button" v-for="tag in popularTags" :key="tag"
                    class="text-xs px-3 py-1.5 bg-[#2b2b2b] border border-gray-700 rounded-md hover:bg-gray-700 hover:border-gray-600 transition-colors"
                    :class="{ '!border-gray-400': tag === 'Graphics Card' }">
                    {{ tag }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Copyright Bar -->
      <div class="bg-gray-900 text-gray-500 text-sm">
        <div class="container mx-auto px-4 py-4 text-center">
          Kinbo-eCommerce Template © 2025. Design by Templatecookie
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const popularTags = ref([
  t('footer.game'), t('footer.iphone'), t('footer.tv'), t('footer.asus_laptops'), t('footer.macbook'), t('footer.ssd'), t('footer.graphics_card'),
  t('footer.power_bank'), t('footer.smart_tv'), t('footer.speaker'), t('footer.tablet'), t('footer.microwave'), t('footer.samsung')
]);
</script>