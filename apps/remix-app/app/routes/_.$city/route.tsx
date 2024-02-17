import { LoaderFunctionArgs, defer } from '@remix-run/node'
import { Await, useLoaderData, useNavigation } from '@remix-run/react'
import { getCoords, getCurrentWeather, getForecast } from './helpers'
import { Forecast, Widget } from '~ui'
import { Suspense } from 'react'

export async function loader({ params, request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const simulateSlowResponse = url.searchParams.get('slow') === 'true'

  const { latitude, longitude } = await getCoords(params.city!)

  const forecastPromise = getForecast({
    latitude,
    longitude,
    simulateSlowResponse,
  })

  const data = await getCurrentWeather({
    latitude,
    longitude,
    simulateSlowResponse,
  })

  return defer({ city: params.city, ...data, forecast: forecastPromise })
}

const blankForecast = {
  day: '',
  time: '',
  icon: '',
  range: {
    min: '',
    max: '',
  },
}

export default function City() {
  const data = useLoaderData<typeof loader>()
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return (
      <div className="ui-mx-auto ui-max-w-[570px] ui-@container">
        <Widget
          data={{ ...data, city: navigation.location.pathname.split('/')[1] }}
          loading
        >
          <Forecast data={new Array(40).fill(blankForecast)} loading />
        </Widget>
      </div>
    )
  }

  return (
    <div className="ui-mx-auto ui-max-w-[570px] ui-@container">
      <Widget data={{ city: data.city ?? '', ...data }}>
        <Suspense
          fallback={
            <Forecast data={new Array(40).fill(blankForecast)} loading />
          }
        >
          <Await resolve={data.forecast} errorElement={<p>Error!</p>}>
            {(forecast) => <Forecast data={forecast} />}
          </Await>
        </Suspense>
      </Widget>
    </div>
  )
}
