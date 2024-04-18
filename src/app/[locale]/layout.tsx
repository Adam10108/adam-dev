import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import { SupportedLocale } from '@/libs/i18n'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Adam Ajsaen',
  description: 'My personal website',
}

export interface LocaleLayout {
  children: React.ReactNode
  params: { locale: SupportedLocale }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayout) {
  const messages = useMessages()

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
