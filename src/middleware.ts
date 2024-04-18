import createMiddleware from 'next-intl/middleware'

import { defaultLocale, supportedLocales } from '@/libs/i18n'

export default createMiddleware({
  locales: supportedLocales,
  defaultLocale: defaultLocale,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
