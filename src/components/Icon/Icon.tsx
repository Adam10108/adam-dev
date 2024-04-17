import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  availableBrandIcons,
  availableIcons,
  BaseIconStyle,
  BrandIcon,
  icon,
  IconStyle,
} from './availableIcons'

export interface Icon {
  name: icon | BrandIcon
  className?: string
  style?: IconStyle
}

export const Icon = (props: Icon) => {
  const { name, className = '', style = 'regular' } = props

  return (
    <div className={className}>
      <FontAwesomeIcon
        icon={getIcon(name, style)}
        style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
      />
    </div>
  )
}

function getIcon(icon: icon | BrandIcon, style: IconStyle): IconDefinition {
  switch (style) {
    case 'brands':
      return availableBrandIcons[icon as BrandIcon]
    default:
      return availableIcons[icon as icon][style as BaseIconStyle]
  }
}
