import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'

import { Button } from './button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: () => alert('Hello, World!'),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: function Render(args) {
    const { t } = useTranslation('common')
    return <Button {...args}>{t('button.label')}</Button>
  },
}

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: '❤️',
  },
}

export const IconAndLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation('common')
    return (
      <Button {...args}>
        <span className="ui-mr-2 ui-h-4 ui-w-4">❤️</span>
        {t('button.label')}
      </Button>
    )
  },
}
