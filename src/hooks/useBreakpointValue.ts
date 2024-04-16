import { useMediaQuery } from 'react-responsive'

export const useBreakpointValue = () => {
  const isDesktop = useMediaQuery({
    minDeviceWidth: SCREEN_SIZE_MAPPING.desktop,
  })
  const isTablet = useMediaQuery({
    minDeviceWidth: SCREEN_SIZE_MAPPING.tablet,
    deviceWidth: SCREEN_SIZE_MAPPING.desktop - 1,
  })

  const isMobile = useMediaQuery({
    deviceWidth: SCREEN_SIZE_MAPPING.tablet - 1,
  })

  return { isDesktop, isTablet, isMobile }
}

export const SCREEN_SIZE_MAPPING = {
  desktop: 1024,
  tablet: 768,
  mobile: 425,
}
