import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './skeleton'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    className: 'ui-w-24 ui-h-4',
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Round: Story = {
  args: {
    className: 'ui-w-6 ui-h-6 !ui-rounded-full',
  },
}
