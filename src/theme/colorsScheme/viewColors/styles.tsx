import styled from 'styled-components'



export const SectionContainer = styled.section`
  width: 100%;
  padding: 8px 8px 32px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #F0F0F0;
`

export const SecondTitle = styled.h2`
  color: #000;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  padding: 8px;
  width: 100%;
  background: #FFF;
`

export const ColorAllContainer = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
`

export const ColorContainerGiant = styled.div`
  display: grid;
  grid-template-columns: '64px';
  grid-template-areas:
    "titc titc titc titc"
    "c025 c050 c075 c100"
    "c125 c150 c175 c200"
    "c225 c250 c275 c300"
    "c325 c350 c400 c450"
    "c500 c500 c500 c500"
    "c550 c600 c650 c675"
    "c700 c725 c750 c775"
    "c800 c825 c850 c875"
    "c900 c925 c950 c975"
  ;
  gap: 2px;
  height: fit-content;
  padding: 6px;
  border: solid 1px;
  background: #FFF;
  box-shadow: 4px 4px 8px 1px #00000080;
`

export const TitleContainerGiant = styled.div`
  grid-area: titc;
  padding: 8px;
  margin-bottom: 2px;
  border-bottom: solid 1px;
  font-weight: 700;
  line-height: 1;
  font-style: normal;
  font-size: 1.4rem;
  width: 100%;
  span {
    font-weight: 400;
    font-style: italic;
    margin-right: 8px;
  }
`

export interface IColor {
  areaName?: string | undefined
  bgColor?: string | undefined
  w?: string | undefined
}
export const Color = styled.div.attrs(({bgColor, w}: IColor) => ({
  style: { background: bgColor, width: w},
})) `
  height: calc(6.4rem * 1.2);
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: ${ ({areaName}: IColor) => areaName };
  max-width: 276px;
  gap: 4px;
`

export const NameColor = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  text-align: center;
  text-shadow: 2px 2px 6px #FFF, -2px -2px 6px #FFF, 0px 0px 6px #FFF;
`
export const HexColor = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 2px 2px 6px #FFF, -2px -2px 6px #FFF, 0px 0px 6px #FFF;
`

export const ContainerMainColors = styled.section`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
`