import en from "../../i18n/locales/en.json";
import ar from "../../i18n/locales/ar.json";

type Locale = "en" | "ar";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as any;
  if (i18n) {
    i18n.setLocaleMessage("en", en);
    i18n.setLocaleMessage("ar", ar);
  }

  const applyStoredLocale = (): void => {
    try {
      const storedLocale = localStorage.getItem("locale") || "en"; // Changed default to match i18n config

      // Only use valid locales
      const locale =
        storedLocale === "en" || storedLocale === "ar"
          ? (storedLocale as Locale)
          : "ar";

      // Get i18n from the Nuxt app
      const i18n = nuxtApp.$i18n as any;

      if (i18n) {
        // Always ensure both locales are loaded
        i18n.setLocaleMessage("en", en);
        i18n.setLocaleMessage("ar", ar);

        // Set the locale if needed
        if (i18n.locale.value !== locale) {
          i18n.setLocale(locale);

          // Also update HTML attributes
          document.documentElement.lang = locale;
          document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
        }
      }
    } catch (error) {
      console.error("Error applying stored locale:", error);
    }
  };

  // Only apply on client-side after hydration to avoid mismatch
  nuxtApp.hook("app:mounted", () => {
    applyStoredLocale();
  });
});
