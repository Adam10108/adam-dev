'use client'

import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { ChangeEvent, useTransition } from 'react'

import { supportedLocales } from '@/libs/i18n'
import { usePathname, useRouter } from '@/libs/i18nNavigation'

export const LanguageSelector = () => {
  const params = useParams()
  const locale = useLocale()
  const t = useTranslations('language-selector')

  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value

    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <select
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {supportedLocales.map((locale) => (
        <option key={locale} value={locale}>
          {t(`locale.${locale}`)}
        </option>
      ))}
    </select>
  )
}
