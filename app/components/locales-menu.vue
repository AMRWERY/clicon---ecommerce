<template>
    <div>
        <div class="relative w-max mx-auto">
            <button type="button" id="dropdownToggle" @click="toggleMenus(menuType)"
                class="cursor-pointer text-slate-100 text-sm font-medium hover:text-slate-200 flex items-center justify-center">
                {{ selectedLanguage?.short }}
                <icon name="material-symbols:keyboard-arrow-down-rounded"
                    class="text-slate-100 ms-1 hover:text-slate-200 mt-1"></icon>
            </button>

            <ul id="dropdownMenu" v-if="isOpen"
                class="absolute top-full end-0 mt-2 rounded-sm [box-shadow:0_8px_19px_-7px_rgba(215,215,215,1)] bg-white py-2 z-[1000] w-max divide-y divide-gray-200 h-max overflow-auto">
                <li v-for="option in languageOptions" :key="option.code" @click="selectLanguage(option)"
                    class='dropdown-item px-5 py-2.5 hover:bg-gray-50 text-slate-600 text-sm font-medium cursor-pointer'>
                    <div class="flex items-center justify-between gap-8">
                        <div class="flex items-center gap-2">
                            <icon :name="option.flagIcon"></icon>
                            <span>{{ option.code }}</span>
                        </div>
                        <icon v-if="selectedLanguage?.code === option.code" name="material-symbols:check"
                            class="text-[#fa8232]" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SupportedLocales } from "@/types/i18n-types";
import type { LanguageOption } from "@/types/locales";

const { locale, t } = useI18n();

const languageOptions = computed<LanguageOption[]>(() => ([
    { code: t('languages_menu.english'), short: 'En', locale: 'en', flagIcon: 'circle-flags:us' },
    { code: t('languages_menu.arabic'), short: t('languages_menu.ar'), locale: 'ar', flagIcon: 'circle-flags:ps' },
]));

const selectedLanguage = computed(() => {
    return languageOptions.value.find(l => l.locale === locale.value) || languageOptions.value[0];
});

const selectLanguage = (option: LanguageOption) => {
    setLocale(option.locale);
    props.toggleMenus(props.menuType)
};

const localeStore = useLocaleStore();

const setLocale = (value: SupportedLocales) => {
    locale.value = value;
    localeStore.updateLocale(value);
};

computed(() => {
    const storedLocale = localeStore.locale;
    setLocale(storedLocale);
});

const props = defineProps<{
    toggleMenus: (menuType: string) => void;
    menuType: string;
    isOpen: boolean;
}>();
</script>