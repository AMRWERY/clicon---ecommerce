<template>
    <div>
        <div v-show="isVisible" :class="{
            'opacity-100 translate-y-0': isVisible,
            'opacity-0 -translate-y-full': !isVisible
        }" class="relative bg-[#191C1F] transition-all duration-500 ease-in-out">
            <div
                class="h-20 flex items-center justify-around px-8 xs:px-2 xs:h-14 sm:px-4 sm:h-16 md:px-16 md:h-20 lg:px-32">
                <!-- promo-badge component -->
                <promo-badge :highlighted-word="'Black'" :main-word="'Friday'" :highlight-bg-color="'bg-yellow-400'"
                    :highlight-text-color="'text-black'" :text-color="'text-white'"
                    class="xs:scale-75 sm:scale-90 md:scale-100" />

                <!-- discount-badge component -->
                <discount-badge :discount-value="59" :highlight-color="'text-yellow-400'" :text-color="'text-gray-100'"
                    class="xs:scale-75 sm:scale-90 md:scale-100" />

                <button
                    class="flex items-center gap-2 whitespace-nowrap rounded-md bg-yellow-400 px-4 py-2 xs:px-2 xs:py-1 xs:text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base font-bold text-black uppercase transition hover:brightness-90 me-5">
                    <span>{{ t('btn.shop_now') }}</span>
                    <icon name="material-symbols:arrow-right-alt-rounded"
                        class="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rtl:rotate-180"></icon>
                </button>
            </div>

            <button @click="closeComponent"
                class="absolute end-4 top-1/2 -translate-y-1/2 rounded-md bg-gray-700 p-1.5 xs:p-1 text-white transition hover:bg-gray-600 flex items-center justify-center">
                <icon name="material-symbols:close-small-rounded" class="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                </icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const isVisible = ref(false);
const storageKey = 'promo-banner-closed';

onMounted(() => {
    if (sessionStorage.getItem(storageKey) !== 'true') {
        isVisible.value = true;
    }
});

const closeComponent = () => {
    isVisible.value = false;
    sessionStorage.setItem(storageKey, 'true');
};
</script>