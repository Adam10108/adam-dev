import { useState } from 'react'
import { CardAction } from '@/components'
import Image from 'next/image'
import { useBreakpointValue } from '@/hooks'

import { ContactDetailsSection } from '../ContactDetailsSection'
import { SocialMediaSection } from '../SocialMediaSection'

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
    <div className="relative p-4 md:px-8 md:py-10 w-full xl:w-2/5 h-fit shadow-md xl:shadow-xl ring-1 ring-gray-900/5 rounded-2xl transition-all duration-700">
      <div className="hidden md:block lg:hidden">
        <CardAction
          label={showContacts ? 'Hide contacts' : 'Show contacts'}
          onClick={() => setShowContacts(!showContacts)}
        />
      </div>

      <div className="block sm:hidden">
        <CardAction
          icon={showContacts ? 'chevronUp' : 'chevronDown'}
          onClick={() => setShowContacts(!showContacts)}
        />
      </div>

      <div className="flex flex-row xl:flex-col items-center gap-4 md:gap-8">
        <div className="relative ring-1 ring-gray-900/5 rounded-2xl bg-gray-900/10 w-20 h-20 md:w-40 md:h-40">
          <Image
            className="p-2"
            src="/avatar.png"
            alt="My avatar"
            fill={true}
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
    </div>
  )
}
