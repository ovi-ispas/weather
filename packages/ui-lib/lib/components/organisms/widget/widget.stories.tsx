import type { Meta, StoryObj } from '@storybook/react'

import { Forecast } from '../../molecules/forecast/forecast'
import { Widget } from './widget'

const FORECAST_DATA = [
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
]

const meta = {
  title: 'Organisms/Widget',
  component: Widget,
  tags: ['autodocs'],
  args: {
    data: {
      city: 'Timisoara',
      temperature: 25,
      description: 'Sunny',
      icon: 'https://openweathermap.org/img/w/04d.png',
      range: { min: 15, max: 25 },
      wind: '5 km/h 0°',
      humidity: 50,
      sunrise: '06:00',
      sunset: '18:00',
    },
  },
} satisfies Meta<typeof Widget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-[640px] ui-@container">
        <Widget {...args}>
          <Forecast data={FORECAST_DATA} loading={args.loading} />
        </Widget>
      </div>
    )
  },
}

export const LargeContainer: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-[720px] ui-@container">
        <Widget {...args}>
          <Forecast data={FORECAST_DATA} loading={args.loading} />
        </Widget>
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
      <div className="ui-w-[640px] ui-@container">
        <Widget {...args}>
          <Forecast data={FORECAST_DATA} loading={args.loading} />
        </Widget>
      </div>
    )
  },
}

export const NoValues: Story = {
  args: {
    showValues: false,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-[640px] ui-@container">
        <Widget {...args}>
          <Forecast data={FORECAST_DATA} loading={args.loading} />
        </Widget>
      </div>
    )
  },
}

export const NoForecast: Story = {
  render: function Render(args) {
    return (
      <div className="ui-w-[640px] ui-@container">
        <Widget {...args} />
      </div>
    )
  },
}

export const OnlyToday: Story = {
  args: {
    showValues: false,
  },
  render: function Render(args) {
    return (
      <div className="ui-w-[640px] ui-@container">
        <Widget {...args} />
      </div>
    )
  },
}
