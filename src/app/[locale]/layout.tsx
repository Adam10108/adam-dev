import type { Metadata } from 'next'

import { SupportedLocale } from '@/libs/i18n'

export const metadata: Metadata = {
  title: 'Adam Ajsaen',
  description: 'My personal website',
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: SupportedLocale }
}>) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
