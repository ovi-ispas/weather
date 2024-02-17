import { redirect, useFetcher } from '@remix-run/react'
import { useEffect } from 'react'
import type { ActionFunctionArgs } from '@remix-run/node'
import { getCity, sanitizeUrl } from './helpers'

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData()
  const city = await getCity({
    latitude: Number(data.get('latitude')),
    longitude: Number(data.get('longitude')),
  })
  return redirect(`/${sanitizeUrl(city)}`)
}

export default function Index() {
  const fetcher = useFetcher()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetcher.submit(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        { method: 'POST' }
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="ui-text-center">
      {fetcher.formAction === '/?index' ? (
        <p>Redirecting, please wait...</p>
      ) : (
        <p>
          Search for a city and press <strong>Enter</strong>,<br /> or use the
          Quick Links above.
        </p>
      )}
    </div>
  )
}
