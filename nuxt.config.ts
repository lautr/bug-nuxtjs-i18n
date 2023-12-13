// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'de',
        langDir: './translations',
        locales: [
          {
            code: 'de',
            file: 'de-DE.ts',
            iso: 'de-DE',
          },
        ],
        /* module options */
      }
    ],
  ],
})
