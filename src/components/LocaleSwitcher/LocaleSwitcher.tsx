'use client'

import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { ChangeEvent, useTransition } from 'react'

import { supportedLocales } from '@/libs/i18n'
import { usePathname, useRouter } from '@/libs/i18nNavigation'

export const LocaleSwitcher = () => {
  const params = useParams()
  const locale = useLocale()
  const t = useTranslations('locale')

  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  const pathname = usePathname()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value

    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <select
      className="py-3 pl-2 pr-6"
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {supportedLocales.map((locale) => (
        <option key={locale} value={locale}>
          {t(`${locale}`)}
        </option>
      ))}
    </select>
  )
}
