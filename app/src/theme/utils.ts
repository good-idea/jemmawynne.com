const defaultAlignment = 'left'

export const getTextAlignment = (
  position: string | void | null,
  customDefault?: string,
): string => {
  const fallback = customDefault || defaultAlignment
  if (!position) return fallback
  const split = position.split('-')
  if (split.length > 1) return split[1]
  return fallback
}

export const getFlexAlignment = (position: string | void | null): string => {
  switch (position) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      return 'flex-start'
    case 'middle-left':
    case 'middle-center':
    case 'middle-right':
      return 'center'
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      return 'flex-end'
    default:
      return 'center'
  }
}

export const getFlexJustification = (
  position: string | void | null,
): string => {
  switch (position) {
    case 'top-left':
    case 'middle-left':
    case 'bottom-left':
      return 'flex-start'
    case 'top-center':
    case 'middle-center':
    case 'bottom-center':
      return 'center'
    case 'top-right':
    case 'middle-right':
    case 'bottom-right':
      return 'flex-end'
    default:
      return 'center'
  }
}

export const getColor = (color: string | void | null): string => {
  switch (color) {
    case 'beige':
      return 'body.2'
    case 'black':
      return 'body.9'
    case 'darkGray':
      return 'body.8'
    case 'lightGray':
      return 'body.3'
    case 'white':
      return 'body.0'
    default:
      return 'inherit'
  }
}
