import type { Meta, StoryObj } from '@storybook/react'

import { Metric } from './metric'

const meta = {
  title: 'Atoms/Metric',
  component: Metric,
  tags: ['autodocs'],
  args: {
    label: 'Temperature',
    value: '23 °C',
  },
} satisfies Meta<typeof Metric>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
}

export const LabelEnd: Story = {
  args: {
    labelPosition: 'end',
  },
}

export const LabelTop: Story = {
  args: {
    labelPosition: 'top',
  },
}

export const LabelBottom: Story = {
  args: {
    labelPosition: 'bottom',
  },
}

export const Custom: Story = {
  args: {
    label: 'm/s',
    value: '2.3',
    labelPosition: 'bottom',
    className: 'ui-text-4xl',
    labelStyles: 'ui-text-xs',
  },
}
