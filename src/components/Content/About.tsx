import React from 'react'
import { IconProps } from '@/components'

export interface AboutProps {
  title: string
  subTitle?: string
  positions: {
    iconName: IconProps['name']
    name: string
    description: string
  }[]
}

export const About = (props: AboutProps) => {
  return <div>About</div>
}
