
import colors from './colorsScheme/colors'
import { ImakeColorsTone } from './colorsScheme/makingTones'

type DefaultColors = typeof colors
interface Colors extends DefaultColors {
  default: ImakeColorsTone
  main: ImakeColorsTone
  second: ImakeColorsTone
}
export interface ITheme {
  colors: Colors
}
export const theme: ITheme = { colors }