<template>
    <div>
        <section class="py-8 sm:py-12">
            <div class="mx-auto px-4 sm:px-6 lg:px-16">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div class="flex items-center gap-x-4 sm:gap-x-6">
                        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">{{ t('home.best_deals') }}</h2>
                        <div class="flex items-center gap-x-2">
                            <span class="text-sm text-gray-500">{{ t('home.deals_ends_in') }}</span>
                            <div
                                class="flex items-center gap-x-1 bg-yellow-400 text-gray-900 font-bold text-sm px-3 py-1.5 rounded-md">
                                <span>{{ countdown.days }}{{ t('home.d') }}</span>
                                <span>:</span>
                                <span>{{ countdown.hours }}{{ t('home.h') }}</span>
                                <span>:</span>
                                <span>{{ countdown.minutes }}{{ t('home.m') }}</span>
                                <span>:</span>
                                <span>{{ countdown.seconds }}{{ t('home.s') }}</span>
                            </div>
                        </div>
                    </div>
                    <router-link to=""
                        class="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-x-1 transition-colors">
                        {{ t('btn.browse_all_product') }}
                        <icon name="material-symbols:arrow-right-alt-rounded" class="rtl:rotate-180"></icon>
                    </router-link>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <div v-for="(product, index) in products" :key="product.id"
                        class="group relative border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
                        :class="{
                            'lg:row-span-2 lg:flex flex-col': index === 0
                        }">

                        <div class="relative" :class="{ 'flex-grow': index === 0 }">
                            <img :src="product.imageUrl" :alt="product.name" class="w-full object-cover" :class="{
                                'h-[400px]': index === 0,
                                'h-48': index !== 0
                            }">
                            <div class="absolute top-3 start-3 text-center flex flex-col gap-y-2">
                                <span v-if="product.discount"
                                    class="text-xs font-bold bg-yellow-400 text-gray-900 px-2 py-1 rounded-md">{{
                                        product.discount }}% {{ t('products.off') }}</span>
                                <span v-if="product.isHot"
                                    class="text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-md uppercase">{{
                                    t('products.hot') }}</span>
                            </div>

                            <span v-if="product.isSoldOut"
                                class="absolute top-3 start-3 text-xs font-bold bg-gray-500 text-white px-2 py-1 rounded-md uppercase">{{
                                t('products.sold_out') }}</span>

                            <div
                                class="absolute inset-0 bg-black/40 flex items-center justify-center gap-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-orange-500 hover:text-white transition-colors">
                                    <icon name="mdi-light:heart"></icon>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-orange-500 hover:text-white transition-colors">
                                    <icon name="mdi-light:cart"></icon>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-orange-500 hover:text-white transition-colors">
                                    <icon name="mdi-light:eye"></icon>
                                </button>
                            </div>
                        </div>

                        <div class="p-4" :class="{ 'flex flex-col h-full': index === 0 }">
                            <div class="flex items-center mb-1">
                                <div class="flex text-yellow-400">
                                    <icon name="material-symbols:kid-star" v-for="i in 5" :key="i"
                                        :class="{ 'text-gray-300': i > product.rating }" class="w-4 h-4"></icon>
                                </div>
                                <span class="text-xs text-gray-500 ml-2">({{ product.reviewCount }})</span>
                            </div>
                            <h3 class="text-sm font-semibold text-gray-800 my-2" :class="{ 'h-10': index !== 0 }">{{
                                product.name }}</h3>
                            <div class="flex items-baseline gap-x-2">
                                <span class="text-lg font-bold text-blue-600" v-if="product.discountedPrice">
                                    {{ formatCurrency(product.discountedPrice) }}
                                </span>
                                <span v-if="product.originalPrice && product.discountedPrice"
                                    class="text-sm text-gray-400 line-through">{{
                                        formatCurrency(product.originalPrice) }}</span>
                                <span class="text-lg font-bold text-blue-600" v-else-if="product.originalPrice">
                                    {{ formatCurrency(product.originalPrice) }}
                                </span>
                            </div>
                            <p v-if="index === 0" class="text-xs text-gray-500 h-16 my-2">{{ product.description }}</p>

                            <div v-if="index === 0" class="flex items-center gap-x-2 mt-auto">
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                                    <icon name="mdi-light:heart"></icon>
                                </button>
                                <button
                                    class="flex-1 bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                                    <div class="flex items-center justify-center gap-1">
                                        <icon name="mdi-light:cart"></icon>
                                        <span>{{ t('btn.add_to_cart') }}</span>
                                    </div>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                                    <icon name="mdi-light:eye"></icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/products'

const { t } = useI18n()

const products = ref<Product[]>([
    { id: 1, name: t('products.xbox_series_console_with_wireless_controller'), imageUrl: '/img/prod-01.png', discountedPrice: 442.12, originalPrice: 865.99, rating: 5, reviewCount: 52677, discount: 32, isHot: true, description: t('products.games_built_using_the_xbox_series_development_kit_showcase_unparalleled_load_times_visuals'), category: 'Headphones' },
    { id: 2, name: t('products.bose_sport_earbuds_wireless_earphones'), imageUrl: '/img/prod-02.png', originalPrice: 2300, rating: 4, reviewCount: 1234, isSoldOut: true, category: 'Smart Phones' },
    { id: 3, name: t('products.simple_mobile_prepaid_smartphone'), imageUrl: '/img/prod-03.png', originalPrice: 220, rating: 4, reviewCount: 567, category: 'TV' },
    { id: 4, name: t('products.smart_tv_with_chromecast_built_in'), imageUrl: '/img/prod-04.png', discountedPrice: 150, originalPrice: 865, rating: 3, reviewCount: 890, discount: 19, category: 'Other' },
    { id: 5, name: t('products.sony_high_zoom_point_shoot_camera'), imageUrl: '/img/prod-05.png', originalPrice: 1200, rating: 5, reviewCount: 4567, category: 'Headphones' },
    { id: 6, name: t('products.dell_optiplex_all_in_one_computer_monitor'), imageUrl: '/img/prod-06.png', originalPrice: 299, rating: 4, reviewCount: 321, category: 'Other' },
    { id: 7, name: t('products.portable_wishing_machine_capacity_model'), imageUrl: '/img/prod-07.png', discountedPrice: 70, originalPrice: 865.99, rating: 2, reviewCount: 98, category: 'TV' },
]);

const countdown = reactive({
    days: '00', hours: '00', minutes: '00', seconds: '00'
});

let timerInterval: number | null = null;

onMounted(() => {
    const dealsEndTime = new Date().getTime() + (16 * 24 * 60 * 60 * 1000) + (21 * 60 * 60 * 1000) + (57 * 60 * 1000);
    timerInterval = window.setInterval(() => {
        const now = new Date().getTime();
        const distance = dealsEndTime - now;
        if (distance < 0) {
            clearInterval(timerInterval!);
            countdown.days = '00';
            countdown.hours = '00';
            countdown.minutes = '00';
            countdown.seconds = '00';
            return;
        }

        countdown.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
        countdown.hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        countdown.minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        countdown.seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    }, 1000);
});

onUnmounted(() => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});

const { formatCurrency } = useCurrencyLocale();
</script>