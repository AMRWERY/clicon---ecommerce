import type { SupportedLocales } from "@/types/i18n-types";
import type { LocaleState } from "@/types/locales";

export const useLocaleStore = defineStore("locales", {
  state: (): LocaleState => ({
    locale: "en",
    isOverlayVisible: false,
  }),

  actions: {
    async updateLocale(newLocale: SupportedLocales) {
      try {
        this.isOverlayVisible = true;
        const nuxtApp = useNuxtApp();
        this.locale = newLocale;
        await nuxtApp.$i18n.setLocale(newLocale);
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
        if (process.client) {
          localStorage.setItem("locale", newLocale);
          // console.log("Saved locale to localStorage:", newLocale);
        }
      } catch (error) {
        console.error("Error updating locale:", error);
      } finally {
        setTimeout(() => {
          this.isOverlayVisible = false;
        }, 3000);
      }
    },

    loadLocale() {
      if (!process.client) return;
      const savedLocale = localStorage.getItem("locale");
      // Use a strict check to validate the locale string
      if (savedLocale === "en" || savedLocale === "ar") {
        this.locale = savedLocale;
      } else {
        // Fallback to default if the saved value is invalid
        this.locale = "en";
      }
      const nuxtApp = useNuxtApp();
      nuxtApp.$i18n.locale.value = this.locale;
      document.documentElement.lang = this.locale;
      document.documentElement.dir = this.locale === "ar" ? "rtl" : "ltr";
      // console.log("Loaded locale from localStorage:", this.locale);
    },
  },

  getters: {
    isRTL: (state) => state.locale === "ar",
  },
});
