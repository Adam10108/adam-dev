import { useTranslations } from 'next-intl'
import React from 'react'

import { Timeline } from '@/components'

export interface ResumeSection {
  education: any
  experience: any
}

export const ResumeSection = (props: ResumeSection) => {
  const { education, experience } = props

  const t = useTranslations('content-renderer.resume-section')

  return (
    <div className="flex flex-col gap-8">
      <Timeline icon="briefcase" title={t('experience')} items={experience} />
      <Timeline icon="graduationCap" title={t('education')} items={education} />
    </div>
  )
}
