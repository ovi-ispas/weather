import { format, parseISO } from 'date-fns'

/** https://openweathermap.org/api/geocoding-api */
export async function getCoords(city: string) {
  // return { latitude: 45.7538355, longitude: 21.2257474 }

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`
  )
  const data = await response.json()
  return { latitude: data[0].lat, longitude: data[0].lon }
}

/** https://openweathermap.org/current */
export async function getCurrentWeather({
  latitude,
  longitude,
  units = 'metric',
  simulateSlowResponse = false,
}: Pick<GeolocationCoordinates, 'latitude' | 'longitude'> & {
  units?: 'metric' | 'imperial'
  simulateSlowResponse?: boolean
}) {
  // simulate slow API response
  simulateSlowResponse &&
    (await new Promise((resolve) => setTimeout(resolve, 1000)))

  // return {
  //   temperature: 4,
  //   description: 'Clear sky',
  //   icon: 'https://openweathermap.org/img/w/01n.png',
  //   range: { min: 3, max: 6 },
  //   wind: '3.09 m/s 20°',
  //   humidity: 80,
  //   sunrise: '07:34',
  //   sunset: '18:04',
  // }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${process.env.OPENWEATHER_API_KEY}`
  )
  const data = await response.json()
  return {
    temperature: Math.round(data.main.temp),
    description: capitalize(data.weather[0].description),
    icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    range: {
      min: Math.round(data.main.temp_min),
      max: Math.round(data.main.temp_max),
    },
    wind: `${data.wind.speed} ${units === 'metric' ? 'm/s' : 'mph'} ${data.wind.deg}°`,
    humidity: data.main.humidity,
    sunrise: format(new Date(Number(data.sys.sunrise) * 1000), 'HH:mm'),
    sunset: format(new Date(Number(data.sys.sunset) * 1000), 'HH:mm'),
  }
}

/** https://openweathermap.org/forecast5 */
export async function getForecast({
  latitude,
  longitude,
  units = 'metric',
  simulateSlowResponse = false,
}: Pick<GeolocationCoordinates, 'latitude' | 'longitude'> & {
  units?: 'metric' | 'imperial'
  simulateSlowResponse?: boolean
}) {
  // simulate slow API response
  simulateSlowResponse &&
    (await new Promise((resolve) => setTimeout(resolve, 4000)))
  /*
  return [
    {
      day: 'Sun',
      time: '21:00',
      icon: 'https://openweathermap.org/img/w/01n.png',
      temp: 5,
      range: { min: 5, max: 6 },
    },
    {
      day: 'Mon',
      time: '00:00',
      icon: 'https://openweathermap.org/img/w/03n.png',
      temp: 5,
      range: { min: 5, max: 5 },
    },
    {
      day: 'Mon',
      time: '03:00',
      icon: 'https://openweathermap.org/img/w/03n.png',
      temp: 4,
      range: { min: 4, max: 4 },
    },
    {
      day: 'Mon',
      time: '06:00',
      icon: 'https://openweathermap.org/img/w/03d.png',
      temp: 4,
      range: { min: 4, max: 4 },
    },
    {
      day: 'Mon',
      time: '09:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Mon',
      time: '12:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 11,
      range: { min: 11, max: 11 },
    },
    {
      day: 'Mon',
      time: '15:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 11,
      range: { min: 11, max: 11 },
    },
    {
      day: 'Mon',
      time: '18:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Mon',
      time: '21:00',
      icon: 'https://openweathermap.org/img/w/10n.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Tue',
      time: '00:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Tue',
      time: '03:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 7,
      range: { min: 7, max: 7 },
    },
    {
      day: 'Tue',
      time: '06:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 7,
      range: { min: 7, max: 7 },
    },
    {
      day: 'Tue',
      time: '09:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Tue',
      time: '12:00',
      icon: 'https://openweathermap.org/img/w/10d.png',
      temp: 12,
      range: { min: 12, max: 12 },
    },
    {
      day: 'Tue',
      time: '15:00',
      icon: 'https://openweathermap.org/img/w/10d.png',
      temp: 10,
      range: { min: 10, max: 10 },
    },
    {
      day: 'Tue',
      time: '18:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Tue',
      time: '21:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Wed',
      time: '00:00',
      icon: 'https://openweathermap.org/img/w/10n.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Wed',
      time: '03:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 7,
      range: { min: 7, max: 7 },
    },
    {
      day: 'Wed',
      time: '06:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 4,
      range: { min: 4, max: 4 },
    },
    {
      day: 'Wed',
      time: '09:00',
      icon: 'https://openweathermap.org/img/w/02d.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Wed',
      time: '12:00',
      icon: 'https://openweathermap.org/img/w/02d.png',
      temp: 11,
      range: { min: 11, max: 11 },
    },
    {
      day: 'Wed',
      time: '15:00',
      icon: 'https://openweathermap.org/img/w/01d.png',
      temp: 11,
      range: { min: 11, max: 11 },
    },
    {
      day: 'Wed',
      time: '18:00',
      icon: 'https://openweathermap.org/img/w/01n.png',
      temp: 8,
      range: { min: 8, max: 8 },
    },
    {
      day: 'Wed',
      time: '21:00',
      icon: 'https://openweathermap.org/img/w/02n.png',
      temp: 6,
      range: { min: 6, max: 6 },
    },
    {
      day: 'Thu',
      time: '00:00',
      icon: 'https://openweathermap.org/img/w/02n.png',
      temp: 5,
      range: { min: 5, max: 5 },
    },
    {
      day: 'Thu',
      time: '03:00',
      icon: 'https://openweathermap.org/img/w/01n.png',
      temp: 4,
      range: { min: 4, max: 4 },
    },
    {
      day: 'Thu',
      time: '06:00',
      icon: 'https://openweathermap.org/img/w/03d.png',
      temp: 4,
      range: { min: 4, max: 4 },
    },
    {
      day: 'Thu',
      time: '09:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Thu',
      time: '12:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 12,
      range: { min: 12, max: 12 },
    },
    {
      day: 'Thu',
      time: '15:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 12,
      range: { min: 12, max: 12 },
    },
    {
      day: 'Thu',
      time: '18:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 10,
      range: { min: 10, max: 10 },
    },
    {
      day: 'Thu',
      time: '21:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Fri',
      time: '00:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Fri',
      time: '03:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Fri',
      time: '06:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 9,
      range: { min: 9, max: 9 },
    },
    {
      day: 'Fri',
      time: '09:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 12,
      range: { min: 12, max: 12 },
    },
    {
      day: 'Fri',
      time: '12:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 13,
      range: { min: 13, max: 13 },
    },
    {
      day: 'Fri',
      time: '15:00',
      icon: 'https://openweathermap.org/img/w/04d.png',
      temp: 13,
      range: { min: 13, max: 13 },
    },
    {
      day: 'Fri',
      time: '18:00',
      icon: 'https://openweathermap.org/img/w/04n.png',
      temp: 13,
      range: { min: 13, max: 13 },
    },
  ]
*/
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${process.env.OPENWEATHER_API_KEY}`
  )
  const data = await response.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const forecastData = data.list.map((item: any) => ({
    day: format(parseISO(item.dt_txt), 'EEE'),
    time: format(parseISO(item.dt_txt), 'HH:mm'),
    icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
    temp: Math.round(item.main.temp),
    range: {
      min: Math.round(item.main.temp_min),
      max: Math.round(item.main.temp_max),
    },
  }))

  return forecastData
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
