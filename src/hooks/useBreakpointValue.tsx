import { useState, useEffect } from 'react'

export const useBreakpointValue = () => {
  const [device, setDevice] = useState({
    desktop: false,
    tablet: false,
    mobile: false,
    w: 0,
    h: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      setDevice({
        desktop: w >= device_screen_mapping.desktop,
        tablet:
          w >= device_screen_mapping.tablet &&
          w < device_screen_mapping.desktop,
        mobile: w < device_screen_mapping.tablet,
        w,
        h,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return device
}

const device_screen_mapping = {
  desktop: 1024,
  tablet: 768,
  mobile: 425,
}
