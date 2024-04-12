import { useState, useEffect, useLayoutEffect } from 'react'

export const useBreakpointValue = () => {
  const w = window.innerWidth
  const h = window.innerHeight

  const [device, setDevice] = useState({
    ...handleScreenSizeChange(w, h),
    w,
    h,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setDevice({
        ...handleScreenSizeChange(w, h),
        w,
        h,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [h, w])

  return device
}

const device_screen_mapping = {
  desktop: 1024,
  tablet: 768,
  mobile: 425,
}

function handleScreenSizeChange(w: number, h: number) {
  return {
    desktop: w >= device_screen_mapping.desktop,
    tablet:
      w >= device_screen_mapping.tablet && w < device_screen_mapping.desktop,
    mobile: w < device_screen_mapping.tablet,
  }
}
