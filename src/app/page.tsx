'use client'

import { redirect } from 'next/navigation'

import { defaultLocale } from '@/libs/i18n'

export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
