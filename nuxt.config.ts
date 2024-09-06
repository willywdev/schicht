import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/fontaine',
      '@nuxtjs/i18n',
      '@primevue/nuxt-module',
      '@nuxtjs/tailwindcss'
    ],
    i18n: {
        vueI18n: "./i18n.config.ts"
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }
})