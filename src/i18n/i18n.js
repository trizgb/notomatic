import { createInstance } from 'i18next'
import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createInstance({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: {
    en: en,
    es: es,
  },
})

i18n.init()

export default i18n
