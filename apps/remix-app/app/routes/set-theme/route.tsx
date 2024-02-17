import { ActionFunctionArgs, redirect } from '@remix-run/node'
import { themeCookie } from '../../cookies.server'

export async function action({ request }: ActionFunctionArgs) {
  const formActionData = await request.formData()

  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themeCookie.parse(cookieHeader)) ?? {}
  cookie.theme = formActionData.get('theme')

  return redirect(request.headers.get('Referer') ?? '/', {
    headers: {
      'Set-Cookie': await themeCookie.serialize(cookie),
    },
  })
}
