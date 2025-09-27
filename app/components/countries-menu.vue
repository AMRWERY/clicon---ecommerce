<template>
  <div>
    <div class="relative w-max mx-auto">
      <button type="button" id="dropdownToggle" @click="toggleMenus(menuType)"
        class="cursor-pointer text-slate-100 text-sm font-medium hover:text-slate-200 flex items-center justify-center">
        {{ selectedCountry?.countryCode }}
        <icon name="material-symbols:keyboard-arrow-down-rounded" class="text-slate-100 ms-1 hover:text-slate-200 mt-1">
        </icon>
      </button>

      <ul id="dropdownMenu" v-if="isOpen"
        class="absolute top-full end-0 mt-2 rounded-sm [box-shadow:0_8px_19px_-7px_rgba(215,215,215,1)] bg-white py-2 z-[1000] w-max divide-y divide-gray-200 h-max overflow-auto">
        <li v-for="option in countryOptions" :key="option.code" @click="handleSelectCountry(option)"
          class='dropdown-item px-5 py-2.5 hover:bg-gray-50 text-slate-600 text-sm font-medium cursor-pointer'>
          <div class="flex items-center justify-between gap-8">
            <div class="flex items-center gap-2">
              <img :src="option.countryIcon" alt="currency-icon" class="w-5 h-5">
              <span>{{ option.name }}</span>
            </div>
            <icon v-if="selectedCountry?.name === option.name" name="material-symbols:check" class="text-[#fa8232]" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CountryOption } from '@/types/countries'

const { t } = useI18n()
const countryStore = useCountryStore();

const countryOptions = computed<CountryOption[]>(() => ([
  { code: 'EGP', countryCode: 'EGP', name: t('countries_menu.egypt'), countryIcon: '/svg/flag-for-egypt.svg' },
  { code: 'ILS', countryCode: 'PAL', name: t('countries_menu.palestine'), countryIcon: '/svg/flag-for-palestinian.svg' },
  { code: 'SAR', countryCode: 'KSA', name: t('countries_menu.saudi_arabia'), countryIcon: '/svg/flag-for-saudi-arabia.svg' },
  { code: 'USD', countryCode: 'USA', name: t('countries_menu.united_states_of_america'), countryIcon: '/svg/united-states-of-america-united-states.svg' },
]));

const selectedCountry = computed(() => countryStore.selectedCountry);

onMounted(() => {
  const firstCountry = countryOptions.value[0];
  if (!countryStore.selectedCountry && firstCountry) {
    countryStore.selectCountry(firstCountry, { showOverlay: false, persist: true });
  }
});

const handleSelectCountry = (option: CountryOption) => {
  countryStore.selectCountry(option)
  props.toggleMenus(props.menuType)
}

const props = defineProps<{
  toggleMenus: (menuType: string) => void;
  menuType: string;
  isOpen: boolean;
}>();
</script>