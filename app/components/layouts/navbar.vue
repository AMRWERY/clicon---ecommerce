<template>
    <div>
        <nav class="sticky z-40 w-full py-3 text-white bg-[#1b6392]">
            <div class="border-b pb-4 border-gray-100 border-opacity-30">
                <div class="px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center md:justify-between gap-y-2">
                    <nuxt-link to="" class="text-sm font-normal">{{
                        t('layouts.welcome_to_clicon_online_ecommerce_store') }}</nuxt-link>
                    <div class="flex items-center space-s-3">
                        <div class="flex items-center space-s-3 divide-s-2 divide-gray-100 divide-opacity-30">
                            <div class="flex items-center space-s-3 pe-3">
                                <p class="text-sm">{{ t('layouts.follow_us') }}</p>
                                <icon name="logos:twitter" class="cursor-pointer"></icon>
                                <icon name="logos:facebook" class="cursor-pointer"></icon>
                                <icon name="logos:pinterest" class="cursor-pointer"></icon>
                                <icon name="logos:reddit-icon" class="cursor-pointer"></icon>
                                <icon name="logos:youtube-icon" class="cursor-pointer"></icon>
                                <icon name="skill-icons:instagram" class="cursor-pointer"></icon>
                            </div>
                            <div class="flex items-center space-s-4 ps-3">
                                <div>
                                    <!-- locales-menu component -->
                                    <locales-menu :toggle-menus="toggleMenus" :menu-type="'locales'"
                                        :is-open="isOpen" />
                                </div>
                                <div>
                                    <!-- currency-menu component -->
                                    <!-- <currency-menu :toggle-menus="toggleMenus" :menu-type="'currency'" :is-open="isCurrencyOpen" /> -->
                                </div>
                                <div>
                                    <!-- countries-menu component -->
                                    <countries-menu :toggle-menus="toggleMenus" :menu-type="'countries'"
                                        :is-open="isCountriesOpen" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <button class="text-white lg:hidden" @click="toggleMenu" aria-label="Toggle Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button> -->
                </div>
            </div>

            <header class="tracking-wide relative">
                <section
                    class="flex items-center justify-between gap-x-4 relative py-3 px-6 md:px-20 lg:px-32 lg:min-h-[70px]">
                    <div class="flex-shrink-0">
                        <nuxt-link to="/" class="shrink-0 flex items-center">
                            <img :src="props.assetResolver('/svg/clicon-logo.svg')" alt="logo" class="w-12" />
                            <p class="uppercase font-bold ms-2 hidden sm:block">Clicon</p>
                        </nuxt-link>
                    </div>

                    <div class="flex-1 flex justify-center px-4">
                        <div class="relative w-full max-w-md">
                            <input type='text' :placeholder="t('form.search_for_anything')"
                                class="w-full bg-gray-100 border border-gray-300 focus:bg-transparent px-4 pe-10 rounded h-10 outline-none text-sm transition-all focus:bg-gray-100" />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3">
                                <icon name="tabler:search" class="text-gray-500"></icon>
                            </div>
                        </div>
                    </div>

                    <div class="flex-shrink-0">
                        <ul class="flex items-center justify-center space-s-6">
                            <li class="cursor-pointer">
                                <span class="relative">
                                    <icon name="solar:cart-large-line-duotone" class="text-white w-[26px] h-[26px]">
                                    </icon>
                                    <span
                                        class="absolute start-auto -ms-1 -top-3 rounded-full bg-white px-1 py-0 text-xs text-gray-800 font-semibold">2</span>
                                </span>
                            </li>
                            <li class="cursor-pointer">
                                <icon name="solar:heart-outline" class="text-white w-[26px] h-[26px]"></icon>
                            </li>
                            <li class="cursor-pointer">
                                <!-- login-dialog component -->
                                <login-dialog :toggle-menus="toggleMenus" :menu-type="'login'" :is-open="isLoginOpen" />
                            </li>
                            <!-- <li class="lg:hidden">
                                <button class="cursor-pointer" @click="toggleMenu">
                                    <icon name="material-symbols:menu-rounded"></icon>
                                </button>
                            </li> -->
                        </ul>
                    </div>
                </section>
            </header>

            <!-- <div :class="{
                'hidden': !isMenuOpen,
                'fixed inset-0 flex flex-col items-center justify-center bg-blue-700 bg-opacity-90': isMenuOpen,
            }" class="lg:flex lg:items-center lg:static lg:bg-transparent lg:flex-row lg:space-x-6">
                <nuxt-link v-for="item in navigationStore.menuItems" :key="item.route" :to="item.route"
                    class="block px-3 py-2 text-lg font-semibold rounded-lg hover:bg-blue-800 lg:hover:bg-transparent">
                    {{ item.title }}
                </nuxt-link>
                <button class="mt-4 text-lg text-white lg:hidden" @click="toggleMenu">
                    Close
                </button>
            </div> -->
        </nav>
    </div>
</template>

<script lang="ts" setup>
// const navigationStore = useNavigationStore();
// const isMenuOpen = ref(false);

// const toggleMenu = () => {
//     isMenuOpen.value = !isMenuOpen.value;
// };

const { t } = useI18n()
const isOpen = ref(false);
const isCurrencyOpen = ref(false);
const isCountriesOpen = ref(false);
const isLoginOpen = ref(false);

const toggleMenus = (menuType: string) => {
    const isCurrentlyOpen = {
        locales: isOpen.value,
        currency: isCurrencyOpen.value,
        countries: isCountriesOpen.value,
        login: isLoginOpen.value,
    }[menuType];
    // Close all menus
    isOpen.value = false;
    isCurrencyOpen.value = false;
    isCountriesOpen.value = false;
    isLoginOpen.value = false;
    // Toggle only the clicked menu based on its previous state
    if (menuType === "locales") isOpen.value = !isCurrentlyOpen;
    else if (menuType === "currency") isCurrencyOpen.value = !isCurrentlyOpen;
    else if (menuType === "countries") isCountriesOpen.value = !isCurrentlyOpen;
    else if (menuType === "login") isLoginOpen.value = !isCurrentlyOpen;
};

const props = defineProps({
    assetResolver: {
        type: Function as PropType<(path: string) => string>,
        default: (path: string) => path,
    }
});
</script>