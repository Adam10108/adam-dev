import React from 'react'
import { Icon } from '@/components'

interface CardActionProps {
  label?: string
  icon?: Icon['name']
  onClick: () => void
}

export const CardAction = (props: CardActionProps) => {
  const { label = null, icon = null, onClick } = props

  return (
    <button
      className="z-10 absolute top-2 right-4 md:right-6"
      onClick={onClick}
    >
      <div className="flex flex-row items-start gap-2">
        {icon && <Icon className="w-4 h-4" name={icon} />}
        {label && <p>{label}</p>}
      </div>
    </button>
  )
}
