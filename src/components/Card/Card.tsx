import React, { PropsWithChildren } from 'react'

import { Icon } from '../Icon'

export interface Card {
  width?: string
  action?: {
    desktop?: CardAction
    tablet?: CardAction
    mobile?: CardAction
  }
}

export const Card = (props: PropsWithChildren<Card>) => {
  const { action = null, children, width = 'w-full' } = props

  return (
    <div className={`${STYLED_MAPPING.card} ${width}`}>
      {action &&
        Object.entries(action).map(([key, value], idx) => (
          <div key={idx} className={STYLED_MAPPING.cardAction[key as Device]}>
            <button
              className="z-10 absolute top-2 right-4 md:right-6"
              onClick={value.onClick}
            >
              <div className="flex flex-row items-start gap-2">
                {value?.icon && <Icon className="w-4 h-4" name={value.icon} />}
                {value?.label && <p>{value.label}</p>}
              </div>
            </button>
          </div>
        ))}

      {children}
    </div>
  )
}

type Device = keyof typeof STYLED_MAPPING.cardAction

type CardAction = {
  label?: string
  icon?: Icon['name']
  onClick: () => void
}

const STYLED_MAPPING = {
  card: 'relative p-4 md:px-8 md:py-10 h-fit shadow-md xl:shadow-xl ring-1 ring-gray-900/5 rounded-2xl transition-all duration-700',
  cardAction: {
    desktop: 'hidden lg:block',
    tablet: 'hidden md:block lg:hidden',
    mobile: 'block sm:hidden',
  },
}
