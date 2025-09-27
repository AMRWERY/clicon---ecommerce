import type { CurrencyLocaleMap } from "@/types/currency";

const currencyLocaleMap: CurrencyLocaleMap = {
  // Arab League Countries in Africa
  EGP: { en: "en-EG", ar: "ar-EG" }, // Egypt
  DZD: { en: "en-DZ", ar: "ar-DZ" }, // Algeria
  MAD: { en: "en-MA", ar: "ar-MA" }, // Morocco
  TND: { en: "en-TN", ar: "ar-TN" }, // Tunisia
  LYD: { en: "en-LY", ar: "ar-LY" }, // Libya
  SDG: { en: "en-SD", ar: "ar-SD" }, // Sudan
  DJF: { en: "en-DJ", ar: "ar-DJ" }, // Djibouti
  MRU: { en: "en-MR", ar: "ar-MR" }, // Mauritania
  KMF: { en: "en-KM", ar: "ar-KM" }, // Comoros
  SOS: { en: "en-SO", ar: "ar-SO" }, // Somalia
  // Arab League Countries in Asia
  SAR: { en: "en-SA", ar: "ar-SA" }, // Saudi Arabia
  AED: { en: "en-AE", ar: "ar-AE" }, // UAE
  QAR: { en: "en-QA", ar: "ar-QA" }, // Qatar
  KWD: { en: "en-KW", ar: "ar-KW" }, // Kuwait
  OMR: { en: "en-OM", ar: "ar-OM" }, // Oman
  BHD: { en: "en-BH", ar: "ar-BH" }, // Bahrain
  JOD: { en: "en-JO", ar: "ar-JO" }, // Jordan
  IQD: { en: "en-IQ", ar: "ar-IQ" }, // Iraq
  LBP: { en: "en-LB", ar: "ar-LB" }, // Lebanon
  SYP: { en: "en-SY", ar: "ar-SY" }, // Syria
  YER: { en: "en-YE", ar: "ar-YE" }, // Yemen
  ILS: { en: "en-PS", ar: "ar-PS" }, // Palestine

  // Default fallback for currencies without a specific country mapping
  DEFAULT: { en: "en-US", ar: "ar-EG" },
};

export function useCurrencyLocale() {
  const { locale } = useI18n();
  const countryStore = useCountryStore();

  const currentCurrency = computed(() => {
    // Get the currency code from the Pinia store's getter.
    // The getter already provides a valid fallback.
    return countryStore.countryCode;
  });

  const currencyLocale = computed(() => {
    const lang = locale.value as "en" | "ar";
    // Now we get a valid currency code from currentCurrency
    const mapping = currencyLocaleMap[currentCurrency.value] || {
      en: "en-US",
      ar: "ar-EG",
    };
    return mapping[lang];
  });

  const formatCurrency = (amount: number | null | undefined): string => {
    if (amount == null) {
      return "";
    }
    const currencyCode = currentCurrency.value;
    const formattingLocale = currencyLocale.value;
    let formatted = new Intl.NumberFormat(formattingLocale, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "symbol",
    }).format(amount);
    // Fallback to enforce '$' for USD in Arabic
    if (locale.value === "ar" && currencyCode === "USD") {
      formatted = formatted.replace(/USD|US\$/g, "$");
    }
    return formatted;
  };

  return {
    currentCurrency,
    currencyLocale,
    formatCurrency,
  };
}
