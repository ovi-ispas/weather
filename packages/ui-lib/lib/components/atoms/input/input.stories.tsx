import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    className: 'ui-w-64',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
