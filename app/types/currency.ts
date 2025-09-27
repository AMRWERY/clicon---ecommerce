export interface CurrencyOption {
  code: string;
  currencyIcon: string;
}


export type LocaleMap = {
  en: string;
  ar: string;
};

export type CurrencyLocaleMap = {
  [key: string]: LocaleMap;
} & {
  DEFAULT: LocaleMap;
};