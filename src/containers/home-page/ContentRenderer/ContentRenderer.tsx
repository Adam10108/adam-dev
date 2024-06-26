import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Card, LanguageSelector } from '@/components'
import { useBreakpointValue } from '@/hooks'

import { AboutSection } from './AboutSection'
import { ResumeSection } from './ResumeSection'

export const ContentRenderer = () => {
  const t = useTranslations('content-renderer')
  const { isDesktop } = useBreakpointValue()

  const contentMenu = {
    about: t('menu-item.about'),
    resume: t('menu-item.resume'),
  }

  const [showMenu, setShowMenu] = useState<boolean>(true)
  const [activeMenu, setActiveMenu] = useState<keyof typeof CONTENT>('about')

  const activeContent = CONTENT[activeMenu]
  const isMenuVisible = isDesktop || showMenu

  return (
    <Card
      action={{
        tablet: {
          label: showMenu ? t('hide-menu') : t('show-menu'),
          onClick: () => setShowMenu(!showMenu),
        },
        mobile: {
          icon: showMenu ? 'chevronUp' : 'chevronDown',
          onClick: () => setShowMenu(!showMenu),
        },
      }}
    >
      <div className="hidden absolute top-6 right-8 xl:flex flex-row justify-end gap-4">
        {Object.entries(contentMenu).map(([key, value], idx) => (
          <button
            key={idx}
            className={key === activeMenu ? 'menu-item-active' : 'menu-item'}
            onClick={() => setActiveMenu(key as keyof typeof CONTENT)}
          >
            {value}
          </button>
        ))}

        <LanguageSelector />
      </div>

      <div
        className={`block xl:hidden ${isMenuVisible ? 'collapse-open' : 'collapse'}`}
      >
        <div className="flex flex-col xl:flex-row items-start gap-4">
          {Object.entries(contentMenu).map(([key, value], idx) => (
            <button
              key={idx}
              className={key === activeMenu ? 'menu-item-active' : 'menu-item'}
              onClick={() => setActiveMenu(key as keyof typeof CONTENT)}
            >
              {value}
            </button>
          ))}

          <LanguageSelector />
        </div>

        <div className="divider" />
      </div>

      <h2>{t(`${activeMenu}-section.title`)}</h2>
      <div className="w-2/12 mt-2 md:mt-4 mb-4 md:mb-8 rounded-lg border-b-8 border-gray-900/5" />

      {CONTENT_MAPPING[activeMenu](
        activeContent as AboutSection & ResumeSection,
      )}
    </Card>
  )
}

export type Content = {
  about: AboutSection
  resume: ResumeSection
}

export type ContentMapping = {
  [key in keyof Content]: (content: Content[key]) => JSX.Element
}

const CONTENT: Content = {
  about: {
    summary:
      "Hi, I'm a software engineer with 4+ years of experience in developing web applications. Experienced in working with teams across multiple projects, Able to work independently of remote locations or in office environments as needed by the company.",
    positions: [
      {
        icon: 'displayCode',
        name: 'Web Developer',
        description:
          'High-quality development of sites at the professional level.',
      },
    ],
  },
  resume: {
    education: [
      {
        title: 'Bachelor of Technology, Information Technology',
        subTitle: "King Mongkut's University of Technology North Bangkok",
        date: '2016 - 2020',
      },
    ],
    experience: [
      {
        title: 'Software Engineer',
        subTitle: 'OPN Co., Ltd.',
        date: 'Aug 2021 - Present',
        location: 'Bangkok, Bangkok City, Thailand',
        description:
          "<ul class='list-disc'><li>Develop Opn.Store (eCommerce) and maintenance internal project</li><li>Develop E-commerce related services for Opn.Store (Email notification, Storefront, Storefront Editor, Merchant dashboard)</li><li>Maintenance and enhance merchant Dashboard</li><li>Develop In-app communication for Dashboard</li><li>Develop Dynamic-onboarding services for creating a registrations form by JSON schema</li></ul>",
      },
      {
        title: 'Web Developer',
        subTitle: 'Eventpop Co., Ltd.',
        date: 'Apr 2020 – Aug 2021',
        location: 'Bangkok, Bangkok City, Thailand',
        description:
          "<ul class='list-disc'><li>Develop POP LIVE (Live Streaming)</li><li>Develop Eventpop Run (Virtual Run)</li><li>Collaborated with software engineering team on designing, testing, coding, and solving problems</li></ul>",
      },
      {
        title: 'Full-Stack Developer',
        subTitle: 'True e-Logistics Co., Ltd.',
        date: 'May 2019 – Sep 2019',
        location: 'Bangkok, Bangkok City, Thailand',
        description:
          '<ul class="list-disc"><li>Cooperative education program.</li><li>Develop an internal dashboard to view report data from the black box.</li></ul>',
      },
    ],
  },
}

const CONTENT_MAPPING: ContentMapping = {
  about: (props: AboutSection) => <AboutSection {...props} />,
  resume: (props: ResumeSection) => <ResumeSection {...props} />,
}
