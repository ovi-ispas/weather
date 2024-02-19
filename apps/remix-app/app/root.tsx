import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from '@remix-run/react'
import { themeCookie } from './cookies.server'

import './tailwind.css'
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from '@remix-run/node'
import { Button, cn } from '~ui'

export const meta: MetaFunction = () => {
  return [{ title: 'Weather App | Home' }, { description: 'Weather App' }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = await themeCookie.parse(cookieHeader)

  return json({ theme: cookie?.theme })
}

export async function action({ request }: ActionFunctionArgs) {
  const formActionData = await request.formData()

  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themeCookie.parse(cookieHeader)) ?? {}
  cookie.theme = formActionData.get('theme')

  return redirect('/', {
    headers: {
      'Set-Cookie': await themeCookie.serialize(cookie),
    },
  })
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>()
  const { formAction } = useNavigation()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={cn('ui-relative', theme ?? '')}>
        <Form
          action="/set-theme"
          method="post"
          className="ui-absolute ui-top-6 ui-right-4"
        >
          <input
            type="hidden"
            name="theme"
            value={theme === 'ui-dark' ? '' : 'ui-dark'}
          />
          <Button variant="secondary" size="sm">
            {formAction === '/set-theme'
              ? 'Switching'
              : theme === 'ui-dark'
                ? 'Light'
                : 'Dark'}{' '}
            Theme
          </Button>
        </Form>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
