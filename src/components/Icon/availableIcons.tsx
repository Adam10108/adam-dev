import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/pro-regular-svg-icons'
import * as solid from '@fortawesome/pro-solid-svg-icons'

export const availableBrandIcons = {
  facebook: brands.faFacebook,
  facebookF: brands.faFacebookF,
  facebookMsg: brands.faFacebookMessenger,
  instagram: brands.faInstagram,
  line: brands.faLine,
  linkedin: brands.faLinkedin,
  linkedinIn: brands.faLinkedinIn,
  twitter: brands.faTwitter,
  youtube: brands.faYoutube,
}

export const availableIcons = {
  briefcase: {
    regular: regular.faBriefcase,
    solid: solid.faBriefcase,
  },
  calendarDays: {
    regular: regular.faCalendarDays,
    solid: solid.faCalendarDays,
  },
  calendarRange: {
    regular: regular.faCalendarRange,
    solid: solid.faCalendarRange,
  },
  chevronDown: {
    regular: regular.faChevronDown,
    solid: solid.faChevronDown,
  },
  chevronUp: {
    regular: regular.faChevronUp,
    solid: solid.faChevronUp,
  },
  cloudMoon: {
    regular: regular.faCloudMoon,
    solid: solid.faCloudMoon,
  },
  displayCode: {
    regular: regular.faDisplayCode,
    solid: solid.faDisplayCode,
  },
  envelope: {
    regular: regular.faEnvelope,
    solid: solid.faEnvelope,
  },
  graduationCap: {
    regular: regular.faGraduationCap,
    solid: solid.faGraduationCap,
  },
  mobileNotch: {
    regular: regular.faMobileNotch,
    solid: solid.faMobileNotch,
  },
  locationDot: {
    regular: regular.faLocationDot,
    solid: solid.faLocationDot,
  },
  sunHaze: {
    regular: regular.faSunHaze,
    solid: solid.faSunHaze,
  },
}

export type IconName = keyof typeof availableIcons
export type BrandIconName = keyof typeof availableBrandIcons

export type BaseIconStyle = 'regular' | 'solid'
export type IconStyle = BaseIconStyle | 'brands'
