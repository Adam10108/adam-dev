import React, { PropsWithChildren } from 'react'

export interface Collapse {
  toggle?: boolean
  maxHeight: string
}

export const Collapse = (props: PropsWithChildren<Collapse>) => {
  const { toggle = false, maxHeight, children } = props

  return (
    <div
      className={`relative overflow-hidden transition-all duration-700 max-h-0`}
      style={toggle ? { maxHeight } : {}}
    >
      {children}
    </div>
  )
}
