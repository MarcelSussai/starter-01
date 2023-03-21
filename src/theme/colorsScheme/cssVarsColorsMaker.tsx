import { theme } from '@/theme/theme'
import { css} from 'styled-components'

const { colors } = theme
export const cssVarColorsMakers = () => { 
  let colorsKeys = Object.entries(colors)
  let rawVarsColorsArray: string = ''
  colorsKeys.map((color, i1) => {
    let colorsEntries = Object.entries(color[1])
    let colorTest: string = ''
    colorsEntries.forEach((cor, i2) => {
      colorTest += `
        --color-${color[0]}-${cor[0].substring(1, 4)}: ${cor[1]};
        --color-${color[0]}-${cor[0].substring(1, 4)}-16: ${cor[1]}16;
        --color-${color[0]}-${cor[0].substring(1, 4)}-32: ${cor[1]}32;
        --color-${color[0]}-${cor[0].substring(1, 4)}-80: ${cor[1]}80;
        --color-${color[0]}-${cor[0].substring(1, 4)}-A0: ${cor[1]}A0;
        --color-${color[0]}-${cor[0].substring(1, 4)}-CE: ${cor[1]}CE;
      `
    })
    // console.log('colorTest', colorTest)
    rawVarsColorsArray += colorTest
  })
  return rawVarsColorsArray
}