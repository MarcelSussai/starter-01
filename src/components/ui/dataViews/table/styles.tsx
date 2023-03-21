import styled, { css } from 'styled-components'
import * as I from './interfaces'
import { inconsolata } from '@/theme/fonts'

const displayCenter = css `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerAbsoluteAll = styled.div<I.IContainerAll>`
--color-025-80: ${({theme, color}: any) => theme.colors[color].c025}80;
--color-025:    ${({theme, color}: any) => theme.colors[color].c025};
--color-075-80: ${({theme, color}: any) => theme.colors[color].c075}80;
--color-100-B0: ${({theme, color}: any) => theme.colors[color].c100}B0;
--color-125-64: ${({theme, color}: any) => theme.colors[color].c125}64;
--color-150:    ${({theme, color}: any) => theme.colors[color].c150}BE;
--color-150-B0: ${({theme, color}: any) => theme.colors[color].c150}B0;
--color-200-AA: ${({theme, color}: any) => theme.colors[color].c200}AA;
--color-300:    ${({theme, color}: any) => theme.colors[color].c300};
--color-600:    ${({theme, color}: any) => theme.colors[color].c600};
--color-750:    ${({theme, color}: any) => theme.colors[color].c750};
--color-800:    ${({theme, color}: any) => theme.colors[color].c800};
--color-900:    ${({theme, color}: any) => theme.colors[color].c900};
--color-main-600:   ${({theme}) => theme.colors.main.c050 };
--color-second-600: ${({theme}) => theme.colors.second.c050 };
--table-radius: 16px;
--table-radius-minus: 12px;
  position: relative;
  width: 100%;
`

export const ContainerAll = styled.div<I.IContainerAll>`
  overflow: auto;
  width: 100%;
  position: relative;
  color: var(--color-750);
  scrollbar-color: var(--color-800) var(--color-200-AA);
  border: solid 1px var(--color-150);
  border-radius: var(--table-radius);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: transparent; }
  &::-webkit-scrollbar-thumb { background: var(--color-750); border-radius: 10px; }
`

export const ContainerAllTable = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  min-width: fit-content;
  /* position: relative; */
  width: 100%;
`

export const ContainerOptions = styled.div`
  position: absolute;
  padding: 8px;
  right: 0px;
  top: 0px;
  height: fit-content;
  max-width: 316px;
  background: var(--color-025);
  z-index: 2;
`

export const ContainerOftoShowColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ContainerItemShowColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    background: #0FF;
  }
`

export const ContainerTableTitleHeader = styled.div`
  color: var(--color-800);
  background: linear-gradient(45deg, var(--color-main-600), var(--color-second-600));
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
	grid-column: 1 / -1;
  gap: 8px;
  padding: 16px;
  border-bottom: solid 1px var(--color-300);
  border-top-left-radius: var(--table-radius-minus);
  border-top-right-radius: var(--table-radius-minus);
  line-height: 1;
  font-size: 2.4rem;
  letter-spacing: .1rem;
  font-weight: 400;
`

export const ContainerTable = styled.div<I.IGridValues>`
  width: 100%;
  display: grid;
  position: relative;
  border: solid 8px var(--color-025-80);
  border-radius: var(--table-radius);
  ${({qtdColumns}) => typeof qtdColumns !== 'number' ?
    `grid-template-columns: 40px 40px ${qtdColumns};` :
    `grid-template-columns: 40px 40px repeat(${qtdColumns}, 1fr );`
  }
  gap: 0;
`

export const ContainerTableRow = styled.div<I.IGridValues>`
  width: 100%;
	grid-column: 1 / -1;
  display: grid;
  ${({qtdColumns}) => typeof qtdColumns !== 'number' ?
    `grid-template-columns: 40px 40px ${qtdColumns};` :
    `grid-template-columns: 40px 40px repeat(${qtdColumns}, 1fr );`
  }
  gap: 0;
  transition: all .2s ease-in-out;
  border-left: solid 0px transparent;
  z-index: 0;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    width: 0px;
    height: 100%;
    background: var(--color-150-B0);
    left: 0;
    top: 0;
    position: absolute;
    transition: all .3s ease-in-out;
  }
  &:hover {
    /* border-left: solid 4px var(--color-150); */
    background: var(--color-100-B0);
    &::before {
      content: '';
      width: 8px;
      height: 100%;
      background: var(--color-150-B0);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
`

export const CellHeader = styled.div<I.ICell>`
  transition: all .2s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  position: relative;
  z-index: 0;
  padding: 0px 0px 0px 0px;
  width: ${ ({size}) => size ? size : '100%' };
  height: 100%;
  color: var(--color-600);
  background: var(--color-075-80);
  border-bottom: solid 1px var(--color-300);
  cursor: pointer;
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 48%;
    background: var(--color-150);
    opacity: ${ ({isFirst}) => isFirst ? '0' : '1' };
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 48%;
    background: var(--color-150);
    opacity: ${ ({isLast}) => isLast ? '0' : '1' };
  }

  &:hover { background: var(--color-100-B0); }
`

export const CellHeaderDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  right: 8px;
  position: absolute;
`

export const CellHeaderText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px 4px 8px;
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
  width: ${ ({size}) => size ? size : '100%' };
  height: 100%;
  width: 100%;
  white-space: nowrap;
  padding: 8px 32px 4px 8px;
  position: relative;
  background: ${ ({alternate}) => alternate ? 'var(--color-075-80)' : 'transparent' };

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 48%;
    background: var(--color-125-64);
    opacity: ${ ({isFirst}) => isFirst ? '0' : '1' };
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 48%;
    background: var(--color-125-64);
    opacity: ${ ({isLast}) => isLast ? '0' : '1' };
  }
`

export const CellSelectHeader = styled.div<I.ICellSelectHeader>`
  ${displayCenter}
  ${ ({noBorder}) => noBorder ? `
  ` : `
    border-bottom: solid 1px var(--color-300);
    border-right: solid 1px var(--color-300);
  ` }
  background: var(--color-075-80);
  position: relative;
  z-index: 1;
  min-width: 24px;
  min-height: 24px;
  

  &::after {
    content: '${ ({qtd}) => qtd }';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -10px;
    right: -10px;
    padding: 3px 3px;
    background: var(--color-750);
    color: var(--color-025);
    opacity: ${ ({qtd}) => qtd && qtd > 0 ? '1' : '0'};
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

export const CellSelect = styled.div<I.ICell>`
  ${displayCenter}
  min-width: 24px;
  min-height: 24px;
  overflow: hidden;
  ${ ({noBorder, isLast}) => noBorder ? '' : `
    border-right: solid 1px var(--color-300);
    border-bottom: solid 1px ${ isLast ? 'transparent' : 'var(--color-150)' };
  ` }
  /* ${ ({isLast}) => isLast ? 'border-bottom-left-radius: var(--table-radius-minus);' : '' } */
  background: var(--color-075-80);
`