import type { SupportedLocales } from "@/types/i18n-types";

export interface LanguageOption {
    code: string;
    flagIcon: string;
    locale: SupportedLocales;
    short: string;
}

export type LocaleState = {
  locale: SupportedLocales;
  isOverlayVisible: boolean;
};