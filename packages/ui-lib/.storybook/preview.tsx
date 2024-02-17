import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../lib/tailwind.css'
import i18n from '../lib/i18next'
import { I18nextProvider } from 'react-i18next'
import React from 'react'
import { Suspense } from 'react'

const withI18next = (Story) => {
  i18n.on('languageChanged', (locale) => {
    const direction = i18n.dir(locale)
    document.dir = direction
  })

  return (
    <Suspense fallback={<p>Loading translations...</p>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en: { title: 'English', left: '🇬🇧' },
      de: { title: 'Deutsch', left: '🇩🇪' },
      ar: { title: 'عربي', left: '🇦🇪' },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    i18n,
  },
  decorators: [
    withThemeByClassName<any>({
      themes: {
        light: '',
        dark: 'ui-dark',
      },
      defaultTheme: 'light',
    }),
    withI18next,
  ],
}

export default preview
