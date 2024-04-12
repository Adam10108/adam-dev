import { useState } from 'react'
import { Card, CardAction, Collapse } from '@/components'
import { About, AboutProps, Resume, ResumeProps } from '.'
import { useBreakpointValue } from '@/hooks'

export const ContentRenderer = () => {
  const { desktop } = useBreakpointValue()

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<keyof typeof CONTENT>('about-me')

  const activeContent = CONTENT[activeMenu]

  return (
    <Card>
      <CardAction
        label={{
          tablet: ['Hide menu', 'Show menu'],
          mobile: ['chevronUp', 'chevronDown'],
        }}
        toggle={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      />

      {desktop ? (
        <div className="absolute top-6 right-8 flex flex-row justify-end gap-4">
          {Object.keys(CONTENT).map((key, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMenu(key as keyof typeof CONTENT)}
            >
              <p className="text-body">{key}</p>
            </button>
          ))}
        </div>
      ) : (
        <Collapse toggle={showMenu} maxHeight="1024px">
          <div className="flex flex-col xl:flex-row items-start gap-4">
            {Object.keys(CONTENT).map((key, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenu(key as keyof typeof CONTENT)}
              >
                <p className="sub-header-1">{key}</p>
              </button>
            ))}
          </div>

          <div className="divider" />
        </Collapse>
      )}

      <h2>{activeContent.title}</h2>
      <div className="w-2/12 mt-2 md:mt-4 mb-4 md:mb-8  rounded-lg border-b-8 border-gray-900/5" />

      {CONTENT_MAPPING[activeMenu](activeContent as AboutProps & ResumeProps)}
    </Card>
  )
}

export type Content = {
  'about-me': AboutProps
  resume: ResumeProps
}

export type ContentMapping = {
  [key in keyof Content]: (content: Content[key]) => JSX.Element
}

const CONTENT: Content = {
  'about-me': {
    title: 'About Me',
    subTitle:
      "Hi, I'm a software engineer with 4+ years of experience in developing web applications. Experienced in working with teams across multiple projects, Able to work independently of remote locations or in office environments as needed by the company.",
    positions: [
      {
        iconName: 'displayCode',
        name: 'Web Developer',
        description:
          'High-quality development of sites at the professional level.',
      },
      {
        iconName: 'displayCode',
        name: 'Web Developer',
        description:
          'High-quality development of sites at the professional level.',
      },
      {
        iconName: 'displayCode',
        name: 'Web Developer',
        description:
          'High-quality development of sites at the professional level.',
      },
      {
        iconName: 'displayCode',
        name: 'Web Developer',
        description:
          'High-quality development of sites at the professional level.',
      },
    ],
  },
  resume: {
    title: 'Resume',
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
      },
      {
        title: 'Web Developer',
        subTitle: 'Eventpop Co., Ltd.',
        date: 'Apr 2020 – Aug 2021',
      },
      {
        title: 'Full-Stack Developer',
        subTitle: 'True e-Logistics Co., Ltd.',
        date: 'May 2019 – Sep 2019',
      },
    ],
  },
}

const CONTENT_MAPPING: ContentMapping = {
  'about-me': (props: AboutProps) => <About {...props} />,
  resume: (props: ResumeProps) => <Resume {...props} />,
}
