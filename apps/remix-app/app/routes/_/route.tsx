import { LoaderFunctionArgs, json } from '@remix-run/node'
import {
  Form,
  Link,
  NavLink,
  Outlet,
  redirect,
  useNavigation,
  useParams,
} from '@remix-run/react'
import { useRef } from 'react'
import { Card, Input, cn } from '~ui'
import '../../../../../packages/ui-lib/lib/components/molecules/copyright/copyright'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const city = url.searchParams.get('city')

  if (!city) {
    return json({ ok: true })
  }

  return redirect(`/${city}`)
}

export default function Layout() {
  const { city } = useParams()
  const navigation = useNavigation()
  const inputRef = useRef<HTMLInputElement>(null)

  // keep input in sync with the URL on client-side navigation
  if (navigation.state === 'loading') {
    const nextValue = decodeURIComponent(
      navigation.location?.pathname.split('/')[1]
    )
    inputRef.current!.value = capitalize(nextValue)
  }

  return (
    <div className="ui-flex ui-flex-col ui-min-h-screen">
      <nav>
        <Card className="ui-flex ui-justify-between">
          <h1 className="ui-w-40 ui-font-semibold ui-text-2xl ui-tracking-tighter">
            <Link to="/">Weather</Link>
          </h1>
          <QuickLinks />
          <span className="ui-w-40" />
        </Card>
      </nav>
      <div className="ui-flex-1 ui-px-4">
        <Form action="/">
          <Input
            aria-label="City name"
            className="ui-mx-auto ui-block ui-my-8 ui-max-w-72"
            ref={inputRef}
            type="text"
            name="city"
            defaultValue={capitalize(city ?? '')}
          />
        </Form>
        <Outlet />
      </div>
      <footer>
        <Card className="ui-p-2 ui-text-xs ui-text-center">
          <copyright-element author="Ovi Ispas" />
        </Card>
      </footer>
    </div>
  )
}

function QuickLinks() {
  return (
    <ul className="ui-hidden sm:ui-flex ui-justify-center ui-gap-4">
      <li>
        <NavLink
          to="/bucuresti"
          className={({ isActive, isPending }) =>
            cn('hover:ui-underline', {
              'ui-underline': isActive,
              'ui-animate-pulse': isPending,
            })
          }
          unstable_viewTransition
          prefetch="intent"
        >
          Bucuresti
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cluj"
          className={({ isActive, isPending }) =>
            cn('hover:ui-underline', {
              'ui-underline': isActive,
              'ui-animate-pulse': isPending,
            })
          }
          unstable_viewTransition
          prefetch="intent"
        >
          Cluj
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/timisoara?slow=true"
          className={({ isActive, isPending }) =>
            cn('hover:ui-underline', {
              'ui-underline': isActive,
              'ui-animate-pulse': isPending,
            })
          }
          unstable_viewTransition
          prefetch="intent"
        >
          Timisoara
        </NavLink>
      </li>
    </ul>
  )
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
