
import styled from 'styled-components'
import { inconsolata } from '@/theme/fonts'



export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const DivCell = styled.div`
  padding: 8px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
  cursor: text;
`

export const DivCell2 = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-family: ${inconsolata.style.fontFamily};
  width: 100%;
  height: 100%;
  .cifra {
    border: solid 1px #BBB6;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #AAAF;
    padding: 3px 6px;
    border-radius: 4px;
  }
  .value {
    font-weight: 500;
    font-size: 1.64rem;
    line-height: 1;
    color: #222F;
    background: #BbBbBb16;
    border-right: solid 1px #BBBA;
    border-left: solid 1px #BBBA;
    padding: 3px 6px;
    border-radius: 8px;
  }
`

export const DivCell3 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-family: ${inconsolata.style.fontFamily};
  font-weight: 500;
  font-size: 1.64rem;
  color: #666F;
  /* border-right: solid 1px #BBB6; */
  padding: 0px 6px;
  width: 100%;
  height: 100%;
  line-height: 1;
`