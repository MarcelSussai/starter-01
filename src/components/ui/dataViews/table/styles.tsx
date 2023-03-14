import styled, { css } from 'styled-components'
import * as I from './interfaces'
import { inconsolata } from '@/theme/fonts'

const displayCenter = css `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerAll = styled.div<I.IContainerAll>`
  --color-025-00: ${({theme, color}: any) => theme.colors[color].c025};
  --color-025:    ${({theme, color}: any) => theme.colors[color].c025};
  --color-075-80: ${({theme, color}: any) => theme.colors[color].c075}80;
  --color-100-A0: ${({theme, color}: any) => theme.colors[color].c100}A0;
  --color-125-64: ${({theme, color}: any) => theme.colors[color].c125}64;
  --color-150:    ${({theme, color}: any) => theme.colors[color].c150};
  --color-200-AA: ${({theme, color}: any) => theme.colors[color].c200}AA;
  --color-300:    ${({theme, color}: any) => theme.colors[color].c300};
  --color-750:    ${({theme, color}: any) => theme.colors[color].c750};
  --color-800:    ${({theme, color}: any) => theme.colors[color].c800};
  --color-900:    ${({theme, color}: any) => theme.colors[color].c900};
  overflow: auto;
  width: 100%;
  color: var(--color-900);
  scrollbar-color: var(--color-800) var(--color-200-AA);
  border: solid 1px var(--color-150);
  border-radius: 4px;
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background:var(--color-025-00); }
  &::-webkit-scrollbar-thumb { background: var(--color-750); border-radius: 10px; }
`

export const ContainerAllTable = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  min-width: fit-content;
  position: relative;
  width: 100%;
`

export const ContainerTableTitleHeader = styled.div`
  background: linear-gradient(0deg, var(--color-750), var(--color-900));
  color: var(--color-025);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
	grid-column: 1 / -1;
  line-height: 1;
  font-size: 1.4rem;
  padding: 12px 8px;
`

export const ContainerTable = styled.div<I.IGridValues>`
  width: 100%;
  display: grid;
  ${({qtdColumns}) => typeof qtdColumns !== 'number' ?
    `grid-template-columns: 32px ${qtdColumns};` :
    `grid-template-columns: 32px repeat(${qtdColumns}, 1fr );`
  }
  gap: 0;
`

export const CellHeader = styled.div<I.ICell>`
  transition: all .2s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 0;
  padding: 0px 0px 0px 0px;
  width: ${ ({size}) => size ? size : '100%' };
  height: 100%;
  background: var(--color-075-80);
  border-bottom: solid 2px var(--color-150);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background: var(--color-125-64);
    opacity: ${ ({isFirst}) => isFirst ? '0' : '1' };
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    background: var(--color-125-64);
    opacity: ${ ({isLast}) => isLast ? '0' : '1' };
  }

  &:hover { background: var(--color-100-A0); }
`

export const CellHeaderDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  /* background: #FFF; */
  padding: 0px 8px;
`

export const CellHeaderText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px 4px 16px;
  font-weight: 900;
  line-height: 1;
  white-space: nowrap;
`

export const CellRows = styled.div<I.ICell>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px var(--color-125-64);
  width: ${ ({size}) => size ? size : '100%' };
  height: 100%;
  white-space: nowrap;
  padding: 0 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background: var(--color-125-64);
    opacity: ${ ({isFirst}) => isFirst ? '0' : '1' };
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    background: var(--color-125-64);
    opacity: ${ ({isLast}) => isLast ? '0' : '1' };
  }
`

export const CellSelectHeader = styled.div<I.ICellSelectHEader>`
  ${displayCenter}
  border-bottom: solid 2px var(--color-150);
  border-right: solid 2px var(--color-150);
  background: var(--color-150);
  position: relative;
  z-index: 1;

  &::after {
    content: '${ ({qtd}) => qtd }';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -10px;
    right: -8px;
    padding: 3px 3px;
    background: var(--color-750);
    color: var(--color-025);
    opacity: ${ ({qtd}) => qtd > 0 ? '1' : '0'};
    user-select: none;
    font-weight: 600;
    width: fit-content;
    height: fit-content;
    min-width: 18px;
    font-size: 1.2rem;
    line-height: 1;
    border-radius: 12px;
    font-family: ${inconsolata.style.fontFamily};
    transition: all .2s ease-in-out;
  }
`

export const CellSelect = styled.div`
  ${displayCenter}
  width: 100%;
  border-right: solid 2px var(--color-150);
  border-bottom: solid 1px var(--color-150);
  background: var(--color-150);
`