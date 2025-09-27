<template>
    <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                class="relative bg-white rounded-xl shadow-lg lg:col-span-2 overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 min-h-[500px]">
                <!-- Background image based on the active item -->
                <div class="absolute inset-0 bg-contain bg-right-bottom rtl:bg-left-bottom bg-no-repeat bg-gray-200 opacity-45 sm:opacity-45 md:!opacity-80"
                    :style="{ backgroundImage: activeItem ? `url(${activeItem.image})` : '' }"></div>
                <div
                    class="absolute top-12 end-8 z-20 w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-white">
                    ${{ activeItem?.price }}
                </div>
                <div class="relative z-10 flex flex-col justify-center space-y-4 text-start p-6">
                    <span class="text-blue-600 font-bold text-sm">
                        — THE BEST PLACE TO PLAY
                    </span>
                    <h1 class="text-5xl font-extrabold text-gray-900 leading-tight">
                        {{ activeItem?.title }}
                    </h1>
                    <p class="text-gray-600 text-lg max-w-md">
                        {{ activeItem?.description }}
                    </p>
                    <button
                        class="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition-colors self-start flex items-center space-s-2">
                        <span>SHOP NOW</span>
                        <icon name="material-symbols:arrow-right-alt-rounded" class="rtl:rotate-180"></icon>
                    </button>
                </div>

                <!-- Product image based on the active item -->
                <div class="relative z-10 hidden mt-6 md:mt-0 md:ms-auto">
                    <div class="relative w-80 h-80">
                        <img :src="activeItem?.image" :alt="activeItem?.title"
                            class="absolute inset-0 w-full h-full object-contain">
                    </div>
                </div>

                <!-- Carousel navigation dots -->
                <div class="absolute bottom-4 start-8 flex space-s-2">
                    <button v-for="(item, index) in carouselItems" :key="index" @click="activeIndex = index"
                        :class="{ 'bg-gray-800': activeIndex === index, 'bg-gray-400': activeIndex !== index }"
                        class="w-3 h-3 rounded-full transition-colors"></button>
                </div>
            </div>

            <div class="grid gap-2">
                <div
                    class="relative bg-black text-white rounded-xl shadow-lg p-6 flex flex-col justify-between overflow-hidden">
                    <img :src="'/img/01.png'" alt="img" class="absolute bottom-0 end-0 w-40" />
                    <div class="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div
                                class="absolute top-4 end-4 bg-yellow-400 text-gray-900 font-bold text-sm rounded-full py-1 px-3">
                                29% OFF
                            </div>
                            <span class="text-sm font-semibold tracking-wider uppercase">
                                SUMMER SALES
                            </span>
                            <h2 class="text-3xl font-extrabold mt-2">
                                New Google <br />
                                Pixel 6 Pro
                            </h2>
                        </div>
                        <button
                            class="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition-colors self-start mt-4 flex items-center space-s-2">
                            <span>SHOP NOW</span>
                            <icon name="material-symbols:arrow-right-alt-rounded" class="rtl:rotate-180"></icon>
                        </button>
                    </div>
                </div>

                <div class="bg-gray-200 rounded-xl shadow-md p-6 flex items-center space-s-6">
                    <!-- Product Image -->
                    <img :src="'/img/02.png'" alt="img" class="w-36 object-fill" />
                    <!-- Product Info -->
                    <div class="flex flex-col justify-between">
                        <h3 class="text-xl font-semibold text-gray-900">Xiaomi FlipBuds Pro</h3>
                        <button
                            class="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-colors mt-4 flex items-center justify-center space-s-2">
                            <span>SHOP NOW</span>
                            <icon name="material-symbols:arrow-right-alt-rounded" class="rtl:rotate-180"></icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature Bar -->
        <div
            class="bg-white rounded-xl shadow p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border border-gray-100 my-4 divide-s">
            <div class="flex justify-center items-center gap-x-4 p-4">
                <icon name="solar:box-bold-duotone" class="text-gray-600 flex-shrink-0"></icon>
                <div>
                    <div class="font-bold text-gray-800 uppercase">24 HOURS RETURN</div>
                    <div class="text-sm text-gray-500">100% money-back guarantee</div>
                </div>
            </div>
            <div class="flex justify-center items-center gap-x-4 p-4">
                <icon name="solar:cup-star-bold-duotone" class="text-gray-600 flex-shrink-0"></icon>
                <div>
                    <div class="font-bold text-gray-800">24 HOURS RETURN</div>
                    <div class="text-sm text-gray-600">100% money-back guarantee</div>
                </div>
            </div>
            <div class="flex justify-center items-center gap-x-4 p-4">
                <icon name="solar:wallet-money-bold-duotone" class="text-gray-600 flex-shrink-0"></icon>
                <div>
                    <div class="font-bold text-gray-800">SECURE PAYMENT</div>
                    <div class="text-sm text-gray-600">Your money is safe</div>
                </div>
            </div>
            <div class="flex justify-center items-center gap-x-4 p-4">
                <icon name="solar:call-medicine-bold-duotone" class="text-gray-600 flex-shrink-0"></icon>
                <div>
                    <div class="font-bold text-gray-800">SUPPORT 24/7</div>
                    <div class="text-sm text-gray-600">Live contact/message</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const carouselItems = ref([
    {
        id: 1,
        title: 'Xbox Consoles',
        description: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
        image: '/img/x-box.png',
        price: '1999'
    },
    {
        id: 2,
        title: 'PlayStation 5',
        description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio.',
        image: '/img/ps5.png',
        price: '2999'
    },
    {
        id: 3,
        title: 'Modern Silver Laptop',
        description: 'Save up to 30% on select Laptop. Get 3 months of PC Game Pass for $2 USD.',
        image: '/img/laptop.png',
        price: '3999'
    },
]);

const activeIndex = ref(0);

const activeItem = computed(() => carouselItems.value[activeIndex.value] ?? null);
</script>