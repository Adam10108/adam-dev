import React from 'react'
import { Timeline } from '@/components'

export interface ResumeProps {
  title: string
  education: any
  experience: any
}

export const Resume = (props: ResumeProps) => {
  const { education, experience } = props

  return (
    <div className="flex flex-col gap-8">
      <Timeline iconName="briefcase" title="Experience" items={experience} />
      <Timeline iconName="graduationCap" title="Education" items={education} />
    </div>
  )
}
