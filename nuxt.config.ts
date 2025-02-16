// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-02-16',
    devtools: {enabled: false},
    /*app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },*/
    modules: [
        '@nuxt/image',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Poppins': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Source+Sans+Pro': [200, 300, 400, 600, 700, 900]
        },
        display: 'swap',
        preconnect: true,
        useStylesheet: true
    }
})