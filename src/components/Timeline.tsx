import React from 'react'
import { Icon, IconProps } from '@/components'
import { sanitizeHtml } from '@/utils'

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
      <div className="flex flex-row items-center gap-6">
        {iconName && (
          <div className="icon-wrapper">
            <Icon name={iconName} />
          </div>
        )}
        <h3>{title}</h3>
      </div>

      <ol className="pt-6 ml-5 md:ml-6 border-s border-gray-900/40">
        {items.map((i, idx) => (
          <li key={idx}>
            <div className="flex items-center">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-gray-900/40" />
              <h4>{i.title}</h4>
            </div>

            <div className="mb-12 ms-4">
              <h5 className="sub-header-3">{i.subTitle}</h5>
              <p className="text-gray-900/40">{i.date}</p>
              {i?.location && <p className="text-gray-900/40">{i.location}</p>}
              {i?.description && (
                <div
                  className="mt-4 ml-4"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(i.description, {}),
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
