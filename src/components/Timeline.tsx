import React from 'react'
import { Icon, IconProps } from '@/components'

export type TimelineItem = {
  title: string
  subTitle: string
  date: string
  location?: string
  description?: string
}

export interface TimelineProps {
  iconName?: IconProps['name']
  title: string
  items: TimelineItem[]
}

export const Timeline = (props: TimelineProps) => {
  const { iconName = null, title, items } = props
  return (
    <div>
      <div className="timeline-header">
        {iconName && (
          <div className="icon-wrapper">
            <Icon name={iconName} />
          </div>
        )}
        <h3>{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((i, idx) => (
          <li key={idx}>
            <div className="timeline-item-title">
              <div className="timeline-item-title-pointer" />
              <h4>{i.title}</h4>
            </div>

            <div className="mb-16 ms-4">
              <h5 className="sub-header-3">{i.subTitle}</h5>
              <p className="text-gray-900/40">{i.date}</p>
              {i?.location && <p className="text-gray-900/40">{i.location}</p>}
              {i?.description && (
                <p className="mt-4 text-body">{i.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
