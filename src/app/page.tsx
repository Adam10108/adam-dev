'use client'

import { useState } from 'react'
import { Card, Icon, IconProps, Collapse } from '@/components'
import { useBreakpointValue } from '@/hooks'
import Image from 'next/image'

export default function Home() {
  const [showContacts, setShowContacts] = useState<boolean>(false)

  const { desktop, tablet } = useBreakpointValue()
  const isContactsVisible = desktop || showContacts

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-4 md:gap-8 p-4 xl:p-24">
      <Card width="relative w-full xl:w-2/5">
        {!desktop && (
          <button
            className="absolute top-2 right-4 md:right-6"
            onClick={() => setShowContacts(!showContacts)}
          >
            {tablet ? (
              showContacts ? (
                'Hide contacts'
              ) : (
                'Show contacts'
              )
            ) : (
              <Icon
                className="w-4 h-4"
                name={showContacts ? 'chevronUp' : 'chevronDown'}
              />
            )}
          </button>
        )}

        <div className="flex flex-row xl:flex-col items-center gap-4 md:gap-8">
          <div className="my-image-wrapper">
            <Image src="/avatar.png" alt="My avatar" fill={true} />
          </div>

          <div className="text-left xl:text-center">
            <h3 className="mb-1 md:mb-3">Adam Ajsaen</h3>
            <div className="badge">Software Engineer</div>
          </div>
        </div>

        <Collapse toggle={isContactsVisible} maxHeight="446px">
          <div className="divider" />

          <div className="contract-list">
            {contacts.map((contact, idx) => (
              <div key={idx} className="contract-item">
                <div className="contract-icon-wrapper">
                  <Icon name={contact.iconName} />
                </div>

                <div>
                  <p className="contract-label">{contact.label}</p>
                  <h5>{contact.value}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          <div className="social-media-list">
            {socialMedia.map(({ iconName, link, style }, idx) => (
              <a key={idx} href={link} target="_blank" rel="noreferrer">
                <Icon
                  className="social-media-icon"
                  name={iconName}
                  style={style}
                />
              </a>
            ))}
          </div>
        </Collapse>
      </Card>

      <Card>Card: About me/ Resume</Card>
    </main>
  )
}

const contacts: {
  iconName: IconProps['name']
  label: string
  value: string
}[] = [
  {
    iconName: 'envelope',
    label: 'EMAIL',
    value: 'adam.ajsaen@gmail.com',
  },
  {
    iconName: 'mobileNotch',
    label: 'PHONE',
    value: '(+66)87-313-7277',
  },
  {
    iconName: 'calendarRange',
    label: 'BIRTHDAY',
    value: 'February 27, 1998',
  },
  {
    iconName: 'locationDot',
    label: 'LOCATION',
    value: 'Lam Luk Ka, Pathum Thani, TH',
  },
]

const socialMedia: {
  iconName: IconProps['name']
  style: IconProps['style']
  link: string
}[] = [
  {
    iconName: 'linkedinIn',
    style: 'brands',
    link: 'https://www.linkedin.com/in/adam-ajsaen',
  },
  {
    iconName: 'envelope',
    style: 'regular',
    link: 'mailto:adam.ajsaen@gmail.com',
  },
  {
    iconName: 'facebookMsg',
    style: 'brands',
    link: 'https://www.facebook.com/adamtao/',
  },
]
