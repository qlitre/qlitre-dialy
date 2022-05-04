import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)
const { API_KEY, SERVICE_DOMAIN, HOST_URL } = process.env;


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'client/',
    ssr: true,
    privateRuntimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    publicRuntimeConfig: {
        hostUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : HOST_URL,
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ['@/assets/css/reset.css', '@/assets/css/style.css'],
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'page',
                path: '/page/:p',
                file: resolve(__dirname, 'client/pages/index.vue')
            }),
                pages.push({
                    name: 'tag',
                    path: '/tag/:tagId/page/:p',
                    file: resolve(__dirname, 'client/pages/index.vue')
                })
        }
    },
})
