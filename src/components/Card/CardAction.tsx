import { SCREEN_SIZE_MAPPING, useBreakpointValue } from '@/hooks'
import React from 'react'
import { Icon, IconProps } from '@/components'

interface CardActionProps {
  label: {
    [key in keyof typeof SCREEN_SIZE_MAPPING]?: Array<
      string | IconProps['name']
    >
  }
  toggle: boolean
  onClick: () => void
}

export const CardAction = (props: CardActionProps) => {
  const { label, toggle, onClick } = props

  const { desktop, tablet, mobile } = useBreakpointValue()

  if (label?.mobile && mobile) {
    const iconName = toggle ? label.mobile[0] : label.mobile[1]
    return (
      <button className="z-10 absolute top-2 right-4 md:right-6" onClick={onClick}>
        <Icon className="w-4 h-4" name={iconName as IconProps['name']} />
      </button>
    )
  }

  if (label?.tablet && tablet) {
    return (
      <button className="z-10 absolute top-2 right-4 md:right-6" onClick={onClick}>
        {toggle ? label.tablet[0] : label.tablet[1]}
      </button>
    )
  }

  if (label?.desktop && desktop) {
    return (
      <button className="z-10 absolute top-2 right-4 md:right-6" onClick={onClick}>
        {toggle ? label.desktop[0] : label.desktop[1]}
      </button>
    )
  }

  return null
}
