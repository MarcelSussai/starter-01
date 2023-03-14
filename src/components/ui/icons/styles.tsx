import styled from 'styled-components'
import * as I from './interfaces'

export const Svg = styled.svg<I.ISvg>`
  --color-900:    ${({theme, color}: any) => theme.colors[color].c900};
  fill: none;
  width: 12px;
  height: 12px;
  path { fill: var(--color-900) }
`