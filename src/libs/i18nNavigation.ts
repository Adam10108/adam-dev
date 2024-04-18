import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

import { supportedLocales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/404': '/404',
} satisfies Pathnames<typeof supportedLocales>

export type AppPathnames = keyof typeof pathnames

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: supportedLocales,
    pathnames,
    localePrefix,
  })
