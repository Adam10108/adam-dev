import { useState, useLayoutEffect } from 'react'

export const useBreakpointValue = () => {
  const width = window.innerWidth

  const [device, setDevice] = useState({
    ...handleScreenSizeChange(width),
    width,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setDevice({
        ...handleScreenSizeChange(width),
        width,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [width])

  return device
}

export const SCREEN_SIZE_MAPPING = {
  desktop: 1024,
  tablet: 768,
  mobile: 425,
}

function handleScreenSizeChange(width: number) {
  return {
    desktop: width >= SCREEN_SIZE_MAPPING['desktop'],
    tablet:
      width >= SCREEN_SIZE_MAPPING['tablet'] &&
      width < SCREEN_SIZE_MAPPING['desktop'],
    mobile: width < SCREEN_SIZE_MAPPING['tablet'],
  }
}
