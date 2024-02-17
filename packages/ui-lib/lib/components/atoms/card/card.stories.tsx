import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Card',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
