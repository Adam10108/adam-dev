import { Icon } from '@/components'

export interface ContactDetailsSection {
  contacts: ContactDetail[]
}

export const ContactDetailsSection = (props: ContactDetailsSection) => {
  const { contacts } = props

  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {contacts.map((contact, idx) => (
        <div key={idx} className="flex flex-row items-center gap-4 md:gap-6">
          <div className="icon-wrapper">
            <Icon name={contact.icon} />
          </div>

          <div>
            <p className="text-body text-gray-900/40">{contact.label}</p>
            <h5>{contact.value}</h5>
          </div>
        </div>
      ))}
    </section>
  )
}

type ContactDetail = {
  icon: Icon['name']
  label: string
  value: string
}
