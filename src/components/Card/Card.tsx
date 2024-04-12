import React, { PropsWithChildren } from 'react'

interface CardProps {
  width?: string
}

export const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, width = 'w-full' } = props

  return (
    <div
      className={`relative p-4 md:px-8 md:md:py-10  ${width} shadow-md xl:shadow-xl ring-1 ring-gray-900/5 rounded-2xl transition-all duration-700`}
    >
      {children}
    </div>
  )
}
