'use client'
import styled from 'styled-components'
import * as I from './interfaces'
import * as SN from '@/theme/snippetsCss'



export const All = styled.section<I.IAllStyle>`
  --radius-12: 12px;
  --radius-16: 16px;
  ${ ({colorString}) => colorString }

  ${SN.animationConfig}
  background: var(--color2-025-CE);
  position: relative;
  width: 100%;
  border: solid 1px var(--color1-200);
  border-radius: var(--radius-16);
`

export const ContainertableOptions = styled.div`
  ${SN.animationConfig}
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: fit-content;
  gap: 8px;
  /* padding: 8px; */
  top: 20px;
  right: 20px;
  z-index: 2;
`

export const ContainerIconOption = styled.button`
  ${SN.animationConfig}
  width: 40px;
  height: 40px;
  background: var(--color1-075);
  border: solid 1px var(--color1-200);
  display: flex;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 8px;
  cursor: pointer;
  
  &:hover { background: var(--color1-200); }
`

export const ConatinerColumnsToShow = styled.div`
  ${SN.animationConfig}
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 44px;
  /* border: solid 1px var(--color1-300); */
  border-radius: 8px;
  padding: 8px;
  background: var(--color1-150);
`

export const ContainerAll = styled.div`
  ${SN.animationConfig}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  min-width: fit-content;
  /* position: relative; */
  width: 100%;
`

export const ContainerAllScroll = styled.div`
  ${SN.animationConfig}
  width: 100%;
  border: solid 8px var(--color1-025);
  border-radius: var(--radius-16);
  overflow: auto;
  position: relative;
  scrollbar-color: var(--color1-800) var(--color1-025);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: var(--color1-025); }
  &::-webkit-scrollbar-thumb { background: var(--color1-800); border-radius: 10px; }
`

export const ContainerAllTable = styled.div`
  ${SN.animationConfig}
  display: grid;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const ContainerTableGridTitle = styled.div<I.IGridTable>`
  ${SN.animationConfig}
  display: grid;
  position: relative;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  width: 100%;
`

export const ContainerTableGridFooter = styled.div<I.IGridTable>`
  ${SN.animationConfig}
  display: grid;
  position: relative;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  width: 100%;
`

export const ContainerTableHeader = styled.div<I.IGridTable>`
  ${SN.animationConfig}
  display: grid;
  position: relative;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  width: 100%;
  background: var(--color1-125);
`

export const ContainerTableRow = styled.div<I.IGridTable>`
  ${SN.animationConfig}
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
	/* grid-column: 1 / -1; */
  position: relative;
  width: 100%;
  cursor: pointer;
  background: ${ ({alternate}) => alternate ? 'var(--color1-075)' : 'var(--color1-050)' };
  ${ ({isLast, isFirst}) => isLast ? `
  ` : isFirst ? `
    border-top: 1px solid var(--color1-500);
    border-bottom: 1px solid var(--color1-150);
  ` : `
    border-bottom: 1px solid var(--color1-150);
  ` }

  &:hover {
    background: var(--color1-200);
  }
`

export const ContainerTableTitle = styled.div`
  ${SN.animationConfig}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  align-items: center;
	grid-column: 1 / -1;
  width: 100%;
  height: 64px;
  gap: 8px;
  padding: 0 16px;
  background: linear-gradient(45deg, var(--color2-100), var(--color3-100));
  border-bottom: solid 1px var(--color1-500);
  border-top-left-radius: var(--radius-12);
  border-top-right-radius: var(--radius-12);
`

export const ContainerGridTable = styled.div`
  ${SN.animationConfig}
`

export const ContainerGridTableRow = styled.div`
  ${SN.animationConfig}
`

export const CellHeader = styled.div<I.ICellHeader>`
  ${SN.animationConfig}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 48%;
    background: var(--color1-200);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 48%;
    background: var(--color1-200);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
  &:hover {
    background: var(--color1-200);

  }
`

export const CellHeaderDetail = styled.div`
  ${SN.animationConfig}
  max-width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CellHeaderText = styled.div`
  ${SN.animationConfig}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  line-height: 1;
  color: var(--color1-800);
`

export const CellRow = styled.div<I.ICellRow>`
  ${SN.animationConfig}
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2px;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  min-height: 48px;
  line-height: 1;
  padding: 8px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 32%;
    background: var(--color1-200);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 32%;
    background: var(--color1-200);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
`

export const CellSelectionHeader = styled.div`
  ${SN.animationConfig}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-075);
`

export const CellSelection = styled.div`
  ${SN.animationConfig}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
  border-right: solid 1px var(--color1-150);
`

export const CellOption = styled.div`
  ${SN.animationConfig}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
  border-right: solid 1px var(--color1-150);
`

export const CellOptionHeader = styled.div`
  ${SN.animationConfig}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-075);
  border-right: solid 1px var(--color1-150);
`

export const ContainerAllFooterTable = styled.div`
  ${SN.animationConfig}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  gap: 8px;
  min-height: 48px;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid var(--color1-500);
  background: linear-gradient(45deg, var(--color2-100), var(--color3-100));
  /* border-top: solid 1px var(--color1-300); */
`
