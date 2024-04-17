import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  availableBrandIcons,
  availableIcons,
  BaseIconStyle,
  Brandicon,
  icon,
  IconStyle,
} from './availableIcons'

export interface Icon {
  name: icon | Brandicon
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

function getIcon(
  icon: icon | Brandicon,
  style: IconStyle,
): IconDefinition {
  switch (style) {
    case 'brands':
      return availableBrandIcons[icon as Brandicon]
    default:
      return availableIcons[icon as icon][style as BaseIconStyle]
  }
}
