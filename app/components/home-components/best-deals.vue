<template>
    <div>
        <section class="py-8 sm:py-12">
            <div class="mx-auto px-4 sm:px-6 lg:px-16">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div class="flex items-center gap-x-4 sm:gap-x-6">
                        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Best Deals</h2>
                        <div class="flex items-center gap-x-2">
                            <span class="text-sm text-gray-500">Deals ends in</span>
                            <div
                                class="flex items-center gap-x-1 bg-yellow-400 text-gray-900 font-bold text-sm px-3 py-1.5 rounded-md">
                                <span>{{ countdown.days }}d</span>
                                <span>:</span>
                                <span>{{ countdown.hours }}h</span>
                                <span>:</span>
                                <span>{{ countdown.minutes }}m</span>
                                <span>:</span>
                                <span>{{ countdown.seconds }}s</span>
                            </div>
                        </div>
                    </div>
                    <router-link to=""
                        class="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-x-1 transition-colors">
                        Browse All Product
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
                                        product.discount }}% OFF</span>
                                <span v-if="product.isHot"
                                    class="text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-md">HOT</span>
                            </div>

                            <span v-if="product.isSoldOut"
                                class="absolute top-3 start-3 text-xs font-bold bg-gray-500 text-white px-2 py-1 rounded-md">SOLD
                                OUT</span>

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
                                        <span>Add to Cart</span>
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

const products = ref<Product[]>([
    { id: 1, name: 'Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...', imageUrl: '/img/prod-01.png', discountedPrice: 442.12, originalPrice: 865.99, rating: 5, reviewCount: 52677, discount: 32, isHot: true, description: 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.' },
    { id: 2, name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', imageUrl: '/img/prod-02.png', originalPrice: 2300, rating: 4, reviewCount: 1234, isSoldOut: true },
    { id: 3, name: 'Simple Mobile 4G LTE Prepaid Smartphone', imageUrl: '/img/prod-03.png', originalPrice: 220, rating: 4, reviewCount: 567 },
    { id: 4, name: '4K UHD LED Smart TV with Chromecast Built-in', imageUrl: '/img/prod-04.png', discountedPrice: 150, originalPrice: 865, rating: 3, reviewCount: 890, discount: 19 },
    { id: 5, name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', imageUrl: '/img/prod-05.png', originalPrice: 1200, rating: 5, reviewCount: 4567 },
    { id: 6, name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', imageUrl: '/img/prod-06.png', originalPrice: 299, rating: 4, reviewCount: 321 },
    { id: 7, name: 'Portable Wishing Machine, 11lbs capacity Model 18NMF...', imageUrl: '/img/prod-07.png', discountedPrice: 70, originalPrice: 865.99, rating: 2, reviewCount: 98 },
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