/* eslint-disable react-refresh/only-export-components, import/export*/
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from '~ui/i18next'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<p>Loading translations...</p>}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
