import React from 'react'

import { Timeline } from '@/components'

export interface ResumeSection {
  title: string
  education: any
  experience: any
}

export const ResumeSection = (props: ResumeSection) => {
  const { education, experience } = props

  return (
    <div className="flex flex-col gap-8">
      <Timeline icon="briefcase" title="Experience" items={experience} />
      <Timeline icon="graduationCap" title="Education" items={education} />
    </div>
  )
}
