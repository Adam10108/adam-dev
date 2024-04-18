import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

export const DEFAULT_LOCALE = 'en'
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, 'th'] as const

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]
