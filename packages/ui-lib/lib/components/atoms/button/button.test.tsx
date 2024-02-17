import '@testing-library/jest-dom'

import { useTranslation } from 'react-i18next'
import { describe, expect, it } from 'vitest'

import i18n from '~ui/i18next'
import { render, screen, waitFor } from '~ui/test-utils'

import { Button } from './button'

describe('Button', () => {
  it('should render with default settings', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should render with an English label', () => {
    render(<ButtonWithI18nLabel />)
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  })

  it('should render with a German label', async () => {
    await i18n.changeLanguage('de')

    render(<ButtonWithI18nLabel />)
    await waitFor(() => {
      expect(screen.getByText('Hallo!')).toBeInTheDocument()
    })
  })

  it('should render with a Secondary variant', () => {
    render(<Button variant="secondary">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('ui-bg-secondary')
  })

  it('should render with a Destructive variant', () => {
    render(<Button variant="destructive">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('ui-bg-destructive')
  })

  it('should render with an Outline variant', () => {
    render(<Button variant="outline">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('ui-border')
    expect(screen.getByText('Hello')).toHaveClass('ui-bg-background')
  })

  it('should render with a Ghost variant', () => {
    render(<Button variant="ghost">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('hover:ui-bg-accent')
  })

  it('should render with a Small size', () => {
    render(<Button size="sm">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('ui-h-8')
  })

  it('should render with a Large size', () => {
    render(<Button size="lg">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('ui-h-10')
  })

  it('should render with a Link variant', () => {
    render(<Button variant="link">Hello</Button>)

    expect(screen.getByText('Hello')).toHaveClass('hover:ui-underline')
  })
})

function ButtonWithI18nLabel() {
  const { t } = useTranslation('common')
  return <Button>{t('button.label')}</Button>
}
