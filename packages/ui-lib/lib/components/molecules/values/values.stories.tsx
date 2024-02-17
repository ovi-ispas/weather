import type { Meta, StoryObj } from '@storybook/react'

import { Values } from './values'

const meta = {
  title: 'Molecules/Values',
  component: Values,
  tags: ['autodocs'],
  args: {
    data: {
      wind: '10 km/h',
      humidity: '50%',
      sunrise: '06:00',
      sunset: '18:00',
    },
  },
} satisfies Meta<typeof Values>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="ui-@container">
        <Values {...args} />
      </div>
    )
  },
}

export const SmallContainer: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-[670px] ui-@container">
        <Values {...args} />
      </div>
    )
  },
}

export const ExtraSmallContainer: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-[510px] ui-@container">
        <Values {...args} />
      </div>
    )
  },
}
