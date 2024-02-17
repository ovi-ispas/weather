import type { Meta, StoryObj } from '@storybook/react'

import { Forecast } from './forecast'

const meta = {
  title: 'Molecules/Forecast',
  component: Forecast,
  tags: ['autodocs'],
  args: {
    data: [
      {
        day: 'Wed',
        time: '15:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
      {
        day: 'Wed',
        time: '16:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
      {
        day: 'Wed',
        time: '17:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
      {
        day: 'Wed',
        time: '18:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
      {
        day: 'Wed',
        time: '19:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
      {
        day: 'Wed',
        time: '20:30',
        icon: 'https://openweathermap.org/img/w/04d.png',
        range: { min: '15', max: '25' },
      },
    ],
  },
} satisfies Meta<typeof Forecast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="ui-@container">
        <Forecast {...args} />
      </div>
    )
  },
}
