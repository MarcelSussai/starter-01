import styled from 'styled-components'
import * as I from './interfaces'

export const ContainerAllCheckbox = styled.label<I.IContainerAllCheckbox>`
  --color-025:    ${({theme, color}: any) => theme.colors[color].c025}A0;
  --color-050:    ${({theme, color}: any) => theme.colors[color].c050};
  --color-075:    ${({theme, color}: any) => theme.colors[color].c075}A0;
  --color-100:    ${({theme, color}: any) => theme.colors[color].c100}AA;
  --color-150:    ${({theme, color}: any) => theme.colors[color].c150};
  --color-275:    ${({theme, color}: any) => theme.colors[color].c275};
  --color-400:    ${({theme, color}: any) => theme.colors[color].c400};
  --color-825:    ${({theme, color}: any) => theme.colors[color].c825};
  --color-925:    ${({theme, color}: any) => theme.colors[color].c925};
  transition: all .24s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${ ({horizontalAlignment}) => horizontalAlignment };
  gap: 6px;
  user-select: none;
  cursor: pointer;
  padding: 6px;
  background: ${ ({noBg}) => noBg ? 'transparent' : 'var(--color-025)' };
  width: 100%;
  width: ${ ({fit}) => fit ? 'fit-content' : '100%' };
  height: ${ ({fit}) => fit ? 'fit-content' : '100%' };
  border-radius: ${ ({fit}) => fit ? '2px' : 'none' };
  &:hover { background: var(--color-150); }
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: none;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`

export const StyledCheckbox = styled.div<I.IStyledCheckbox>`
  --size: 18px;
  transition: all .24s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 2px;
  background: ${ ({checked}) => checked ? 'var(--color-825)' : 'var(--color-025)' };
  color: ${ ({checked}) => !checked ? 'var(--color-150)' : 'var(--color-050)' };
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  border: solid 1px ${({checked}) => !checked ? 'var(--color-275)' : 'var(--color-925)'};
`

export const Text = styled.span<I.IText>`
  font-size: 12px;
  transition: all .24s ease-in-out;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  color: ${ ({checked}) => !checked ? 'var(--color-400)' : 'var(--color-925)' };
  padding: 0 6px 0 0;
`