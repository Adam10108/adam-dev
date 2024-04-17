import React from 'react'
import { Card, Icon } from '@/components'

export interface AboutSection {
  title: string
  subTitle: string
  positions: {
    icon: Icon['name']
    name: string
    description: string
  }[]
}

export const AboutSection = (props: AboutSection) => {
  const { subTitle, positions } = props

  return (
    <div>
      <h4 className="sub-header-3 mb-8 xl:mb-14">{subTitle}</h4>
      <h3 className="mb-6 xl:mb-8">{"What i'm doing"}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positions.map((p, idx) => (
          <Card key={idx}>
            <div className="flex gap-4">
              <div className="w-8 sm:w-12">
                <Icon name={p.icon} />
              </div>

              <div className="w-full">
                <h5 className="mb-2">{p.name}</h5>
                <p className="text-body text-gray-900/50">{p.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
