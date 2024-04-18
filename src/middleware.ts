import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/libs/i18n'

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
