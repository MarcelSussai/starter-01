import styled, { css } from 'styled-components'
import { IGridValues } from './interfaces'

const displayCenter = css `
  display: flex;
  justify-content: center;
  align-items: center;
`


export const ContainerAllTable = styled.section`
  --color-track-strong: #323232;
  --color-track-soft: #CCC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  overflow: auto;
  width: 100%;
  scrollbar-color: var(--color-track-strong) var(--color-track-soft);
  border-left: solid 1px;
  border-right: solid 1px;
  border-bottom: solid 1px;
  
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: var(--color-track-soft); }
  &::-webkit-scrollbar-thumb { background: var(--color-track-strong); }
`

export const ContainerTableTitleHeader = styled.div`
  background: #333F;
  padding: 4px;
  color: #FFF;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
	grid-column: 1 / -1;
  line-height: 1;
`

export const ContainerTable = styled.div<IGridValues>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat( ${ ({qtdColumns}) => qtdColumns }, 1fr );
  gap: 0;
  border-left: 1px solid #000F;
`

export const CellHeader = styled.div`
  ${displayCenter}
  border-right: solid 1px;
  border-bottom: solid 2px;
  min-width: 96px;
  width: 100%;
  font-weight: 800;
`

export const CellRows = styled.div`
  ${displayCenter}
  border-right: solid 1px;
  border-bottom: solid 1px;
  min-width: 96px;
  width: 100%;
`
