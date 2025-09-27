import type { CountryOption } from "@/types/countries";

export const useCountryStore = defineStore("countries", {
  state: () => ({
    selectedCountry: null as CountryOption | null,
    isOverlayVisible: false,
  }),

  actions: {
    initializeCountry() {
      if (!process.client) return;
      const storedCode = localStorage.getItem("countryCode");
      if (storedCode) {
        // reconstruct the country object if you have a list of options
        const allCountries: CountryOption[] = [
          // import or inject your countries list here
        ];
        this.selectedCountry =
          allCountries.find((c) => c.countryCode === storedCode) || null;
      }
      this.isOverlayVisible = false;
    },

    selectCountry(
      country: CountryOption,
      opts: { showOverlay?: boolean; persist?: boolean } = {}
    ) {
      const { showOverlay = true, persist = true } = opts;
      if (showOverlay) this.isOverlayVisible = true;
      this.$patch({ selectedCountry: country });
      if (persist && process.client) {
        localStorage.setItem("countryCode", country.countryCode);
      }
      if (showOverlay) {
        setTimeout(() => {
          this.isOverlayVisible = false;
        }, 3000);
      }
    },
  },

  getters: {
    isCountrySelected(state): boolean {
      return state.selectedCountry !== null;
    },
    countryCode(state): string {
      return state.selectedCountry?.countryCode || "EGP";
    },
  },
});
