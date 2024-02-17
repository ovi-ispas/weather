import type { Meta, StoryObj } from '@storybook/react'

import { Today } from './today'

const meta = {
  title: 'Molecules/Today',
  component: Today,
  tags: ['autodocs'],
  args: {
    temperature: '20',
    icon: 'https://openweathermap.org/img/w/04d.png',
    range: { min: '15', max: '25' },
  },
} satisfies Meta<typeof Today>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-96 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const ImperialUnit: Story = {
  args: {
    unit: 'imperial',
  },
  render: function Render(args) {
    return (
      <div className="ui-w-96 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const TemperatureOnly: Story = {
  args: {
    icon: undefined,
    range: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-96 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const NoIcon: Story = {
  args: {
    icon: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-96 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const NoRange: Story = {
  args: {
    range: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-96 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const SmallContainer: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-32 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const SmallContainerTemperatureOnly: Story = {
  args: {
    icon: undefined,
    range: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-32 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const SmallContainerNoIcon: Story = {
  args: {
    icon: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-32 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}

export const SmallContainerNoRange: Story = {
  args: {
    range: undefined,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-32 ui-@container">
        <Today {...args} />
      </div>
    )
  },
}
