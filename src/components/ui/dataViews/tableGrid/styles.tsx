import styled, { css } from 'styled-components'
import * as I from './interfaces'

export const All = styled.section<I.IAllStyle>`
  --radius-12: 12px;
  --radius-16: 16px;
  --color1-025: ${ ({color1}) => `var(--color-${color1}-025)` } ;
  --color1-025-80: ${ ({color1}) => `var(--color-${color1}-025-80)` } ;
  --color1-025-CE: ${ ({color1}) => `var(--color-${color1}-025-CE)` } ;
  --color1-050: ${ ({color1}) => `var(--color-${color1}-050)` } ;
  --color1-050-80: ${ ({color1}) => `var(--color-${color1}-050-80)` } ;
  --color1-075: ${ ({color1}) => `var(--color-${color1}-075)` } ;
  --color1-075-A0: ${ ({color1}) => `var(--color-${color1}-075-A0)` } ;
  --color1-100: ${ ({color1}) => `var(--color-${color1}-100)` } ;
  --color1-125: ${ ({color1}) => `var(--color-${color1}-125)` } ;
  --color1-200: ${ ({color1}) => `var(--color-${color1}-200)` } ;
  --color1-300: ${ ({color1}) => `var(--color-${color1}-300)` } ;
  --color1-800: ${ ({color1}) => `var(--color-${color1}-800)` } ;
  --color2-025-CE: ${ ({color2}) => `var(--color-${color2}-025-CE)` } ;
  --color2-025-80: ${ ({color2}) => `var(--color-${color2}-025-80)` } ;
  --color2-050-80: ${ ({color2}) => `var(--color-${color2}-050-80)` } ;
  --color2-075: ${ ({color2}) => `var(--color-${color2}-075)` } ;
  --color2-100: ${ ({color2}) => `var(--color-${color2}-100)` } ;
  --color3-100: ${ ({color3}) => `var(--color-${color3}-100)` } ;
  --color3-050-80: ${ ({color3}) => `var(--color-${color3}-050-80)` } ;

  background: var(--color2-025-CE);
  position: relative;
  width: 100%;
  border: solid 1px var(--color1-200);
  border-radius: var(--radius-16);
  transition: all .24s ease-in-out;
`

export const ContainertableOptions = styled.div`
  transition: all .24s ease-in-out;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: fit-content;
  gap: 8px;
  padding: 8px;
  /* background: var(--color1-025-CE); */
  top: 8px;
  right: 8px;
  z-index: 2;
`

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  min-width: fit-content;
  /* position: relative; */
  width: 100%;
`

export const ContainerAllScroll = styled.div`
  transition: all .24s ease-in-out;
  /* position: relative; */
  width: 100%;
  border: solid 8px var(--color1-025);
  border-radius: var(--radius-16);
  /* padding-bottom: 12px; */
  overflow: auto;
  position: relative;
  scrollbar-color: var(--color1-800) transparent;
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: transparent; }
  &::-webkit-scrollbar-thumb { background: var(--color1-800); border-radius: 10px; }
`

export const ContainerAllTable = styled.div`
  transition: all .24s ease-in-out;
  display: grid;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const ContainerTableGridTitle = styled.div<I.IGridTable>`
  transition: all .24s ease-in-out;
  display: grid;
  position: relative;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  width: 100%;
`

export const ContainerTableHeader = styled.div<I.IGridTable>`
  transition: all .24s ease-in-out;
  display: grid;
  position: relative;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  width: 100%;
  border-bottom: solid 1px var(--color1-200);
`

export const ContainerTableRow = styled.div<I.IGridTable>`
  transition: all .24s ease-in-out;
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
	/* grid-column: 1 / -1; */
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: var(--color1-125);
  }
`

export const ContainerTableTitle = styled.div`
  transition: all .24s ease-in-out;
  background: linear-gradient(45deg, var(--color2-100), var(--color3-100));
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  align-items: center;
	grid-column: 1 / -1;
  width: 100%;
  min-height: 48px;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: solid 1px var(--color1-300);
  border-top-left-radius:  var(--radius-12);
  border-top-right-radius:  var(--radius-12);
`

export const ContainerGridTable = styled.div`
  transition: all .24s ease-in-out;
`

export const ContainerGridTableRow = styled.div`
  transition: all .24s ease-in-out;
`

export const CellHeader = styled.div<I.ICellHeader>`
  transition: all .24s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color1-050);
  padding: 8px;
  cursor: pointer;
  user-select: none;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 48%;
    background: var(--color1-125);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 48%;
    background: var(--color1-125);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
  &:hover {
    background: var(--color1-100);

  }
`

export const CellHeaderDetail = styled.div`
  max-width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CellHeaderText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 800;
  line-height: 1;
`

export const CellRow = styled.div<I.ICellRow>`
  transition: all .24s ease-in-out;
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
  background: ${ ({alternate}) => alternate ? 'var(--color1-075-A0)' : 'var(--color1-050-80)' };
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 32%;
    background: var(--color1-100);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 32%;
    background: var(--color1-100);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
`

export const CellSelectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
`

export const CellSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
`

export const CellOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
`

export const CellOptionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color1-050);
`
