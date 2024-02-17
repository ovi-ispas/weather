/* eslint-disable import/no-named-as-default-member, import/no-named-as-default */
import i18n, { Resource } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const ns = ['common']
const supportedLngs = ['en', 'de', 'ar']
const resources = ns.reduce<Resource>((acc, n) => {
  supportedLngs.forEach(async (lng) => {
    if (!acc[lng]) acc[lng] = {}
    acc[lng] = {
      ...acc[lng],
      [n]: await import(`./locales/${lng}/${n}.json`),
    }
  })
  return acc
}, {})

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
    supportedLngs,
    resources,
  })

export default i18n
