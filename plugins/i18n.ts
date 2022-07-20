import { i18nPlugin } from '~~/i18n/i18n-vue'
import { defineNuxtPlugin } from '#app'
import { loadAllLocales } from '~~/i18n/i18n-util.sync'

export default defineNuxtPlugin(nuxtApp => {
   loadAllLocales()
   nuxtApp.vueApp.use(i18nPlugin, 'en')
})