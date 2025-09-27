// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    viewer: true,
    exposeConfig: false,
  },
  pinia: {
    storesDirs: ["./app/stores/**", "./custom-folder/stores/**"],
  },
  imports: {
    presets: [
      {
        from: "@vueuse/core",
        imports: ["promiseTimeout", "useTimeoutPoll"],
      },
    ],
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: [
      {
        code: "ar",
        name: "العربية",
        dir: "rtl",
        // file: "ar.json",
      },
      {
        code: "en",
        name: "English",
        dir: "ltr",
        // file: "en.json",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    // langDir: "locales",
    // skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      // alwaysRedirect: true,
      alwaysRedirect: false,
      fallbackLocale: "en",
      redirectOn: "root",
    },
  },
  veeValidate: {
    autoImports: true,
  },
  experimental: {
    payloadExtraction: true,
  },
  router: {
    options: {
      strict: false,
    },
  },
  plugins: ["~/plugins/locale.client.ts", "~/plugins/log-routes.client.ts"],
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Clicon",
      script: [{}],
      noscript: [],
      link: [{}],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
