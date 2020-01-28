import styles from '../config/styles'
import { get } from 'lodash'

export const theme = {
  color: target => get(styles, `colors.${target}`),
  shadow: target => get(styles, `shadows.${target}`),
  font: target => get(styles, `fonts.${target}`),
  radius: target => get(styles, `radii.${target}`),
  fontSize: target => get(styles, `fontSizes.${target}`),
}
