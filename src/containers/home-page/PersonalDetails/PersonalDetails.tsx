import Image from 'next/image'
import { useState } from 'react'

import { Card } from '@/components'
import { useBreakpointValue } from '@/hooks'

import { ContactDetailsSection } from './ContactDetailsSection'
import { SocialMediaSection } from './SocialMediaSection'

export interface PersonalDetails {
  fullName: string
  role: string
  contacts: ContactDetailsSection['contacts']
  socialMedia: SocialMediaSection['socialMedia']
}

export const PersonalDetails = (props: PersonalDetails) => {
  const { fullName, role, contacts, socialMedia } = props

  const [showContacts, setShowContacts] = useState<boolean>(true)
  const { isDesktop } = useBreakpointValue()

  const isContactsVisible = isDesktop || showContacts

  return (
    <Card
      width="w-full xl:w-2/5"
      action={{
        tablet: {
          label: showContacts ? 'Hide contacts' : 'Show contacts',
          onClick: () => setShowContacts(!showContacts),
        },
        mobile: {
          icon: showContacts ? 'chevronUp' : 'chevronDown',
          onClick: () => setShowContacts(!showContacts),
        },
      }}
    >
      <div className="flex flex-row xl:flex-col items-center gap-4 md:gap-8">
        <div className="relative ring-1 ring-gray-900/5 rounded-2xl bg-gray-900/10 w-20 h-20 md:w-40 md:h-40">
          <Image
            className="p-2"
            src="/images/avatar.png"
            alt="My avatar"
            sizes="100%"
            fill
          />
        </div>

        <div className="text-left xl:text-center">
          <h3 className="mb-1 md:mb-3">{fullName}</h3>
          <div className="badge">{role}</div>
        </div>
      </div>

      <div className={isContactsVisible ? 'collapse-open' : 'collapse'}>
        <div className="divider" />
        <ContactDetailsSection contacts={contacts} />
        <div className="divider" />
        <SocialMediaSection socialMedia={socialMedia} />
      </div>
    </Card>
  )
}
