import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  availableBrandIcons,
  availableIcons,
  BaseIconStyle,
  BrandIconName,
  IconName,
  IconStyle,
} from './availableIcons'

export interface IconProps {
  name: IconName | BrandIconName
  className?: string
  style?: IconStyle
}

export const Icon = (props: IconProps) => {
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
  iconName: IconName | BrandIconName,
  style: IconStyle,
): IconDefinition {
  switch (style) {
    case 'brands':
      return availableBrandIcons[iconName as BrandIconName]
    default:
      return availableIcons[iconName as IconName][style as BaseIconStyle]
  }
}
