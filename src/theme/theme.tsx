
import colors from './colorsScheme/colors'
export interface ITheme {
  colors: typeof colors
}
export const theme: ITheme = { colors }