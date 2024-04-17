import { Icon } from '@/components'

export interface SocialMediaSection {
  socialMedia: SocialMedia[]
}

export const SocialMediaSection = (props: SocialMediaSection) => {
  const { socialMedia } = props

  return (
    <section className="w-full flex flex-row justify-start xl:justify-center gap-2">
      {socialMedia.map(({ icon, link, style }, idx) => (
        <a key={idx} href={link} target="_blank" rel="noreferrer">
          <Icon
            className="w-6 md:w-8 h-6 md:h-8 inline-block mr-2 md:mr-4"
            name={icon}
            style={style}
          />
        </a>
      ))}
    </section>
  )
}

type SocialMedia = {
  icon: Icon['name']
  style: Icon['style']
  link: string
}
