import { i18nPlugin } from '~~/i18n/i18n-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.use(i18nPlugin, 'en')
})