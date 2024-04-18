import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound()

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})

export const defaultLocale = 'en'
export const supportedLocales = [defaultLocale, 'th'] as const

export type SupportedLocale = (typeof supportedLocales)[number]
