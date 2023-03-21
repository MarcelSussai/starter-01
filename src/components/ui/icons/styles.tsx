import styled from 'styled-components'
import * as I from './interfaces'

export const Svg = styled.svg<I.ISvg>`
  --color-900: ${({theme, color}: any) => theme.colors[color].c800};
  fill: none;
  width: ${ ({width}) => width ? width : '12px' };
  height: ${ ({height}) => height ? height : '100%' };
  /* height: 12px; */
  path { fill: var(--color-900) }
  transition: all .2s ease-in-out;
  transform: rotate(${({mode}) =>
    mode === 'up' ? '0deg' :
    mode === 'down' ? '180deg' :
    mode === 'left' ? '-90deg' :
    mode === 'right' ? '90deg' : '0deg'
  });
  opacity: ${ ({show}) => show ? '1' : '0' };
`