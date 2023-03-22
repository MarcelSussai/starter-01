import { css } from 'styled-components'

export const animationConfig = css `
  @keyframes show { from { opacity: 0 } to { opacity: 1 } }
  animation: show .24s ease-in-out forwards;
  transition: all .24s ease-in-out;
`
