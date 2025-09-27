<template>
    <div>
        <div class="mx-auto p-4 md:p-8 px-4 sm:px-6 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                <div class="lg:col-span-1">
                    <div
                        class="bg-[#ead574] rounded-lg p-6 text-center text-gray-800 h-full flex flex-col justify-between">
                        <div>
                            <p class="text-sm font-semibold uppercase mb-2">Computer & Accessories</p>
                            <h2 class="text-4xl font-bold mb-2">32% Discount</h2>
                            <p class="mb-4">For all electronics products</p>
                            <div class="flex items-center justify-center text-sm mb-6">
                                <span>Offers ends in:</span>
                                <span class="ms-2 px-3 py-1 bg-white rounded-md font-semibold text-gray-800">ENDS OF
                                    CHRISTMAS</span>
                            </div>
                            <button
                                class="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                                Shop Now
                                <icon name="material-symbols:arrow-right-alt-rounded" class="ms-2 rtl:rotate-180">
                                </icon>
                            </button>
                            <div class="mt-[52px] discount-image-area"></div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Featured Products</h2>
                        <div class="flex items-center space-s-4 text-sm font-medium text-gray-500 flex-wrap">
                            <button class="text-orange-500 border-b-2 border-orange-500 pb-1">All Product</button>
                            <button class="hover:text-gray-900">Smart Phone</button>
                            <button class="hover:text-gray-900">Laptop</button>
                            <button class="hover:text-gray-900">Headphone</button>
                            <button class="hover:text-gray-900">TV</button>
                            <button class="flex items-center text-orange-500 hover:underline">
                                Browse All Product
                                <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180">
                                </icon>
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div v-for="product in products" :key="product.id"
                            class="bg-white rounded-lg shadow-sm overflow-hidden group">
                            <div class="relative p-4">
                                <span v-if="product.badge"
                                    class="absolute top-4 start-4 text-xs font-semibold px-2 py-1 rounded text-white"
                                    :class="product.badge.class">
                                    {{ product.badge.text }}
                                </span>
                                <img :src="product.imageUrl" :alt="product.name" class="w-full h-40 object-contain" />

                                <div
                                    class="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center space-s-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center">
                                        <icon name="mdi-light:heart"></icon>
                                    </button>
                                    <button
                                        class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center">
                                        <icon name="mdi-light:cart"></icon>
                                    </button>
                                    <button
                                        class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center">
                                        <icon name="mdi-light:eye"></icon>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 border-t border-gray-200">
                                <div class="flex items-center mb-1">
                                    <div class="flex text-yellow-400 text-xs">
                                        <icon name="material-symbols:kid-star" v-for="i in 5" :key="i"
                                            :class="{ 'text-gray-300': i > product.rating }" class="w-4 h-4"></icon>
                                    </div>
                                    <span class="text-xs text-gray-500 ms-2">({{ product.reviewCount }})</span>
                                </div>
                                <h3 class="text-sm font-medium text-gray-800 truncate h-10">{{ product.name }}</h3>
                                <div class="flex items-baseline space-s-2 mt-2">
                                    <p class="text-lg font-bold text-blue-600" v-if="product.discountedPrice">
                                        {{ formatCurrency(product.discountedPrice) }}
                                    </p>
                                    <p v-if="product.originalPrice && product.discountedPrice"
                                        class="text-sm text-gray-400 line-through">{{
                                            formatCurrency(product.originalPrice) }}</p>
                                    <p class="text-lg font-bold text-blue-600" v-else-if="product.originalPrice">
                                        {{ formatCurrency(product.originalPrice) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="rounded-lg p-8 flex items-center justify-between bg-gray-200">
                    <div class="w-1/2">
                        <span
                            class="text-sm font-bold px-3 py-1 rounded-md mb-4 inline-block bg-blue-500 text-white">Introducing</span>
                        <h2 class="text-3xl font-bold mb-2 text-gray-900">New Apple Homepod Mini</h2>
                        <p class="text-sm mb-6 text-gray-600">Jam-packed with innovation, HomePod mini delivers
                            unexpectedly.</p>
                        <button
                            class="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg flex items-center hover:bg-orange-600 transition-colors">
                            Shop Now
                            <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180"></icon>
                        </button>
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <img src="/img/homepod.png" alt="homepod" class="max-h-48" />
                    </div>
                </div>

                <div class="rounded-lg p-8 flex items-center justify-between bg-gray-800 text-white">
                    <div class="w-1/2">
                        <span
                            class="text-sm font-bold px-3 py-1 rounded-md mb-4 inline-block bg-yellow-400 text-gray-900">Introducing
                            New</span>
                        <h2 class="text-3xl font-bold mb-2 text-white">Xiaomi Mi 11 Ultra 12GB+256GB</h2>
                        <p class="text-sm mb-6 text-gray-300">*Data provided by internal laboratories. Industry
                            measurment.</p>
                        <button
                            class="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg flex items-center hover:bg-orange-600 transition-colors">
                            Shop Now
                            <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180"></icon>
                        </button>
                    </div>
                    <div class="relative w-1/2 flex justify-end">
                        <img src="/img/xiaomi-mobile.png" alt="xiaomi-mobile" class="max-h-48" />
                        <span
                            class="absolute top-4 end-4 bg-blue-500 text-white text-lg font-bold p-4 rounded-full flex items-center justify-center">$590</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/products';

// Dummy data that would typically come from an API
const products = ref<Product[]>([
    { id: 1, name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...', imageUrl: '/img/prod-08.png', originalPrice: 70, rating: 5, reviewCount: 738, badge: { text: 'HOT', class: 'bg-red-500' } },
    { id: 2, name: 'Samsung Electronics Samsung Galaxy S21 5G', imageUrl: '/img/prod-09.png', originalPrice: 2300, rating: 5, reviewCount: 536 },
    { id: 3, name: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...', imageUrl: '/img/prod-010.png', originalPrice: 360, rating: 4, reviewCount: 423, badge: { text: 'BEST DEALS', class: 'bg-blue-500' } },
    { id: 4, name: 'Portable Wshing Machine, 11lbs capacity Model 18NMF...', imageUrl: '/img/prod-011.png', originalPrice: 80, rating: 4, reviewCount: 816 },
    { id: 5, name: 'Wired Over-Ear Gaming Headphones with USB', imageUrl: '/img/prod-012.png', originalPrice: 1500, rating: 4, reviewCount: 647 },
    { id: 6, name: 'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...', imageUrl: '/img/prod-013.png', discountedPrice: 1200, originalPrice: 1600, rating: 3, reviewCount: 877, badge: { text: '25% OFF', class: 'bg-green-500' } },
    { id: 7, name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', imageUrl: '/img/computer.png', originalPrice: 250, rating: 5, reviewCount: 426 },
    { id: 8, name: '4K UHD LED Smart TV with Chromecast Built-in', imageUrl: '/img/prod-014.png', originalPrice: 220, rating: 5, reviewCount: 583, badge: { text: 'SALE', class: 'bg-green-500' } },
]);

const { formatCurrency } = useCurrencyLocale();
</script>

<style scoped>
.discount-image-area {
    background-color: #ead574;
    background-image: url('/img/discount-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 428px;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    margin-bottom: -1.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}

@media (max-width: 767px) {
    .discount-image-area {
        height: auto;
        aspect-ratio: 1 / 1;
        background-size: cover;
    }
}
</style>