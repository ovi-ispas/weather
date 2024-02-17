/** https://openweathermap.org/api/geocoding-api */
export async function getCity({
  latitude,
  longitude,
}: Pick<GeolocationCoordinates, 'latitude' | 'longitude'>) {
  // return 'Dumbrăvița'

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`
  )
  const data = await response.json()
  return data[0].name
}

export function sanitizeUrl(str: string) {
  return encodeURIComponent(str.replace(/\s+/g, '-')).toLowerCase()
}
