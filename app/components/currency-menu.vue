<template>
    <div>
        <div class="relative w-max mx-auto">
            <button type="button" id="dropdownToggle" @click="toggleMenus(menuType)"
                class="cursor-pointer text-slate-100 text-sm font-medium hover:text-slate-200 flex items-center justify-center">
                {{ selectedCurrency?.code }}
                <icon name="material-symbols:keyboard-arrow-down-rounded"
                    class="text-slate-100 ms-1 hover:text-slate-200 mt-1"></icon>
            </button>

            <ul id="dropdownMenu" v-if="isOpen"
                class="absolute top-full end-0 mt-2 rounded-sm [box-shadow:0_8px_19px_-7px_rgba(215,215,215,1)] bg-white py-2 z-[1000] w-max divide-y divide-gray-200 h-max overflow-auto">
                <li v-for="option in currencyOptions" :key="option.code" @click="selectCurrency(option)"
                    class='dropdown-item px-5 py-2.5 hover:bg-gray-50 text-slate-600 text-sm font-medium cursor-pointer'>
                    <div class="flex items-center justify-between gap-8">
                        <div class="flex items-center gap-2">
                            <img :src="option.currencyIcon" alt="currency-icon" class="w-5 h-5">
                            <span>{{ option.code }}</span>
                        </div>
                        <icon v-if="selectedCurrency?.code === option.code" name="material-symbols:check"
                            class="text-[#fa8232]" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { CurrencyOption } from '@/types/currency'

const currencyOptions = ref<CurrencyOption[]>([
    { code: 'USD', currencyIcon: '/svg/dollar.svg' },
    { code: 'EGP', currencyIcon: '/svg/pound.svg' },
]);

const selectedCurrency = ref<CurrencyOption | undefined>(currencyOptions.value[0]);

const selectCurrency = (option: CurrencyOption) => {
    selectedCurrency.value = option;
    props.toggleMenus(props.menuType)
};

const props = defineProps<{
    toggleMenus: (menuType: string) => void;
    menuType: string;
    isOpen: boolean;
}>();
</script>