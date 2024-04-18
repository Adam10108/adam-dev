'use client'

import { useTranslations } from 'next-intl'

import { ContentRenderer, PersonalDetails } from '@/containers/home-page'

export default function Home() {
  const t = useTranslations('personal-details')

  const contacts: PersonalDetails['contacts'] = [
    {
      icon: 'envelope',
      label: t('email'),
      value: 'adam.ajsaen@gmail.com',
    },
    {
      icon: 'mobileNotch',
      label: t('phone'),
      value: '(+66)87-313-7277',
    },
    {
      icon: 'calendarRange',
      label: t('birthday'),
      value: 'February 27, 1998',
    },
    {
      icon: 'locationDot',
      label: t('location'),
      value: 'Lam Luk Ka, Pathum Thani, TH',
    },
  ]

  const socialMedia: PersonalDetails['socialMedia'] = [
    {
      icon: 'linkedinIn',
      style: 'brands',
      link: 'https://www.linkedin.com/in/adam-ajsaen',
    },
    {
      icon: 'envelope',
      style: 'regular',
      link: 'mailto:adam.ajsaen@gmail.com',
    },
    {
      icon: 'facebookMsg',
      style: 'brands',
      link: 'https://www.facebook.com/adamtao/',
    },
  ]

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-4 md:gap-8 p-4 xl:p-8">
      <PersonalDetails
        fullName="Adam Ajsaen"
        role="Software Engineer"
        contacts={contacts}
        socialMedia={socialMedia}
      />
      <ContentRenderer />
    </main>
  )
}
