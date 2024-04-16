import { useState } from 'react'
import { Card, Icon, IconProps, CardAction } from '@/components'
import Image from 'next/image'
import { useBreakpointValue } from '@/hooks'

export interface PersonalDetailsProps {
  fullName: string
  role: string
  contacts: Contact[]
  socialMedia: SocialMedia[]
}

export const PersonalDetails = (props: PersonalDetailsProps) => {
  const { fullName, role, contacts, socialMedia } = props

  const [showContacts, setShowContacts] = useState<boolean>(true)
  const { isDesktop } = useBreakpointValue()

  const isContactsVisible = isDesktop || showContacts

  return (
    <Card width="w-full xl:w-2/5">
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
        <div className="my-image-wrapper">
          <Image src="/avatar.png" alt="My avatar" fill={true} />
        </div>

        <div className="text-left xl:text-center">
          <h3 className="mb-1 md:mb-3">{fullName}</h3>
          <div className="badge">{role}</div>
        </div>
      </div>

      <div className={isContactsVisible ? 'collapse-open' : 'collapse'}>
        <div className="divider" />

        <div className="contract-list">
          {contacts.map((contact, idx) => (
            <div key={idx} className="contract-item">
              <div className="icon-wrapper">
                <Icon name={contact.icon} />
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
          {socialMedia.map(({ icon, link, style }, idx) => (
            <a key={idx} href={link} target="_blank" rel="noreferrer">
              <Icon className="social-media-icon" name={icon} style={style} />
            </a>
          ))}
        </div>
      </div>
    </Card>
  )
}

type Contact = {
  icon: IconProps['name']
  label: string
  value: string
}

type SocialMedia = {
  icon: IconProps['name']
  style: IconProps['style']
  link: string
}
