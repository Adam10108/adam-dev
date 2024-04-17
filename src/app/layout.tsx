import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adam Ajsaen',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
