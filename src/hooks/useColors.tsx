import { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from 'styled-components'

interface IuseColors {
  wantedColors: string[],
  opacityHexaArray?: string[],
}
export default function useColors({
  wantedColors, opacityHexaArray = [
    '16', '32', '80', 'A0', 'BB', 'CE'
  ]
}: IuseColors) {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const { colors } = useTheme()
  const colorsKeys = Object.entries(colors)

  const [colorString, setColorString] = useState('')

  useIsomorphicLayoutEffect(() => {
    let rawraw = ''
    if(wantedColors){
      colorsKeys.filter(
        (c1) => { if(wantedColors.includes(c1[0])) return [c1[0], c1] }
      ).sort((a, b) => { return a[0] > b[0] ? 1 : -1 }).forEach((c1, i1) => {
        let rawColors = Object.entries(c1[1])
          rawColors.map((c2, i2) => {
            rawraw += `
              --color${i1 + 1}-${c2[0].substring(1, 4)}: ${c2[1]};`
            opacityHexaArray.map((c3, i3) => {
              rawraw += `
                --color${i1 + 1}-${c2[0].substring(1, 4)}-${c3}: ${c2[1]}${c3};`
              })
            })
          })
        setColorString(rawraw)
    }
  }, [wantedColors, colorsKeys, opacityHexaArray])
  return { colorString }
}