export interface CountryOption {
  code: string;
  countryCode: string;
  name: string;
  countryIcon: string;
}

export type CountryState = {
  locale: CountryOption;
  isOverlayVisible: boolean;
};
