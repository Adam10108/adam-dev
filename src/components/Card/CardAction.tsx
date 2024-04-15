import { SCREEN_SIZE_MAPPING } from '@/constants'
import React from 'react'
import { Icon, IconProps } from '@/components'
import { useMediaQuery } from 'react-responsive'

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

  const desktop = useMediaQuery({
    minDeviceWidth: SCREEN_SIZE_MAPPING.desktop,
  })
  const tablet = useMediaQuery({
    minDeviceWidth: SCREEN_SIZE_MAPPING.tablet,
    maxDeviceWidth: SCREEN_SIZE_MAPPING.desktop - 1,
  })
  const mobile = useMediaQuery({
    maxDeviceWidth: SCREEN_SIZE_MAPPING.tablet - 1,
  })

  if (label?.mobile && mobile) {
    const iconName = toggle ? label.mobile[0] : label.mobile[1]
    return (
      <button
        className="z-10 absolute top-2 right-4 md:right-6"
        onClick={onClick}
      >
        <Icon className="w-4 h-4" name={iconName as IconProps['name']} />
      </button>
    )
  }

  if (label?.tablet && tablet) {
    return (
      <button
        className="z-10 absolute top-2 right-4 md:right-6"
        onClick={onClick}
      >
        {toggle ? label.tablet[0] : label.tablet[1]}
      </button>
    )
  }

  if (label?.desktop && desktop) {
    return (
      <button
        className="z-10 absolute top-2 right-4 md:right-6"
        onClick={onClick}
      >
        {toggle ? label.desktop[0] : label.desktop[1]}
      </button>
    )
  }

  return null
}
