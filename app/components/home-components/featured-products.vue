<template>
    <div>
        <div class="mx-auto p-4 md:p-8 px-4 sm:px-6 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                <div class="lg:col-span-1">
                    <div
                        class="bg-[#ead574] rounded-lg p-6 text-center text-gray-800 h-full flex flex-col justify-between">
                        <div>
                            <p class="text-sm font-semibold uppercase mb-2">{{ t('home.computer_accessories') }}</p>
                            <h2 class="text-4xl font-bold mb-2">32% {{ t('home.discount') }}</h2>
                            <p class="mb-4">{{ t('home.for_all_electronics_products') }}</p>
                            <div class="flex items-center justify-center text-sm mb-6">
                                <span>{{ t('home.offers_ends_in') }}</span>
                                <span
                                    class="ms-2 px-3 py-1 bg-white rounded-md font-semibold text-gray-800 uppercase">{{
                                        t('home.ends_of_christmas') }}</span>
                            </div>
                            <button
                                class="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                                {{ t('btn.shop_now') }}
                                <icon name="material-symbols:arrow-right-alt-rounded" class="ms-2 rtl:rotate-180">
                                </icon>
                            </button>
                            <div class="mt-[52px] discount-image-area"></div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4 md:mb-0">{{ t('home.featured_products') }}</h2>
                        <ul class="flex items-center space-s-4 text-sm font-medium text-gray-500 flex-wrap">
                            <li v-for="tab in tabs" :key="tab" :class="[
                                activeTab === tab
                                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                                    : 'hover:text-gray-900',
                                'cursor-pointer',
                            ]" @click="activeTab = tab">
                                {{ t(`tabs.${tab.toLowerCase().replace(' ', '_')}`) }}
                            </li>
                            <button class="flex items-center text-orange-500 hover:underline">
                                {{ t('btn.browse_all_product') }}
                                <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180">
                                </icon>
                            </button>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="bg-white rounded-lg shadow-sm overflow-hidden group">
                            <div class="relative p-4">
                                <span v-if="product.badge"
                                    class="absolute top-4 start-4 text-xs font-semibold px-2 py-1 rounded text-white uppercase"
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
                            class="text-sm font-bold px-3 py-1 rounded-md mb-4 inline-block bg-blue-500 text-white uppercase">{{
                                t('products.introducing') }}</span>
                        <h2 class="text-3xl font-bold mb-2 text-gray-900">{{ t('products.new_apple_homepod_mini') }}
                        </h2>
                        <p class="text-sm mb-6 text-gray-600">{{
                            t('products.jam_packed_with_innovation_homePod_mini_delivers_unexpectedly') }}</p>
                        <button
                            class="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg flex items-center hover:bg-orange-600 transition-colors">
                            {{ t('btn.shop_now') }}
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
                            class="text-sm font-bold px-3 py-1 rounded-md mb-4 inline-block bg-yellow-400 text-gray-900 uppercase">{{
                                t('products.introducing_new') }}</span>
                        <h2 class="text-3xl font-bold mb-2 text-white">{{ t('products.xiaomi_mi_ultra') }}</h2>
                        <p class="text-sm mb-6 text-gray-300">{{
                            t('products.data_provided_by_internal_laboratories_industry_measurment') }}</p>
                        <button
                            class="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg flex items-center hover:bg-orange-600 transition-colors">
                            {{ t('btn.shop_now') }}
                            <icon name="material-symbols:arrow-right-alt-rounded" class="ms-1 rtl:rotate-180"></icon>
                        </button>
                    </div>
                    <div class="relative w-1/2 flex justify-end">
                        <img src="/img/xiaomi-mobile.png" alt="xiaomi-mobile" class="max-h-48" />
                        <span
                            class="absolute top-4 end-4 bg-blue-500 text-white text-lg font-bold p-4 rounded-full flex items-center justify-center">{{
                            formatCurrency(590) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/products';

const { t } = useI18n()
const { formatCurrency } = useCurrencyLocale();

const products = ref<Product[]>([
    { id: 1, name: t('products.true_wireless_earbuds_bluetooth_headphon'), imageUrl: '/img/prod-08.png', originalPrice: 70, rating: 5, reviewCount: 738, badge: { text: t('products.hot'), class: 'bg-red-500' }, category: 'Headphones' },
    { id: 2, name: t('products.samsung_electronics_samsung_galaxy'), imageUrl: '/img/prod-09.png', originalPrice: 2300, rating: 5, reviewCount: 536, category: 'Smart Phones' },
    { id: 3, name: t('products.samsung_electronics_samsung_galaxy'), imageUrl: '/img/prod-010.png', originalPrice: 360, rating: 4, reviewCount: 423, badge: { text: t('products.best_deals'), class: 'bg-blue-500' }, category: 'TV' },
    { id: 4, name: t('products.amazon_basics_high_speed_cable'), imageUrl: '/img/prod-011.png', originalPrice: 80, rating: 4, reviewCount: 816, category: 'Other' },
    { id: 5, name: t('products.wired_over_ear_gaming_headphones_with'), imageUrl: '/img/prod-012.png', originalPrice: 1500, rating: 4, reviewCount: 647, category: 'Headphones' },
    { id: 6, name: t('products.polaroid_photo_video_tripod_with_deluxe_tripod'), imageUrl: '/img/prod-013.png', discountedPrice: 1200, originalPrice: 1600, rating: 3, reviewCount: 877, badge: { text: `25% ${t('products.off')}`, class: 'bg-green-500' }, category: 'Other' },
    { id: 7, name: t('products.dell_optiplex_all_in_one_computer_monitor'), imageUrl: '/img/computer.png', originalPrice: 250, rating: 5, reviewCount: 426, category: 'Laptops' },
    { id: 8, name: t('products.smart_tv_with_chromecast_built_in'), imageUrl: '/img/prod-014.png', originalPrice: 220, rating: 5, reviewCount: 583, badge: { text: 'SALE', class: 'bg-green-500' }, category: 'TV' },
]);

const tabs = ['All Product', 'Smart Phones', 'Laptops', 'Headphones', 'TV'];
const activeTab = ref('All Product');

const filteredProducts = computed(() => {
    if (activeTab.value === 'All Product') {
        return products.value;
    }
    return products.value.filter((product) => product.category === activeTab.value);
});
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