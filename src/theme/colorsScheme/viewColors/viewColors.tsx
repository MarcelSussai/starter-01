import { Fragment, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import * as S from './styles'
import { ImakeColorsTone } from '../makingTones'

const ViewColors = () => {
  
  const { colors } = useTheme()

  const [arrayColors, setArrayColors] = useState<any>(Object.values(colors))
  const [arrayNameColors, setArrayNameColors] = useState<any>(Object.keys(colors))
    

  useEffect(() => {
    // console.log('colors', arrayColors[0].c500)
    // console.log('typeof white', typeof colors.basic.white)
    // console.log('typeof gray_tones', typeof colors)
    // console.log('COLORS: ', JSON.stringify(colors))
  })

  return (
  <S.SectionContainer>
    <S.SecondTitle> Cores Disponíveis no Tema:  </S.SecondTitle>
    <S.ContainerMainColors>
      {
        arrayColors.map((item: ImakeColorsTone, index: number) => {
          return (
            <S.Color key={index} w='100%' bgColor={item.c500}>
              <S.NameColor> {arrayNameColors[index]} </S.NameColor>
              <S.NameColor> c500 </S.NameColor>
              <S.HexColor> {item.c500} </S.HexColor>
            </S.Color>
          )
        })
      }
      {/* <S.Color color={}/> */}
    </S.ContainerMainColors>
    <S.SecondTitle> Todas as Tonalidades: </S.SecondTitle>
    <S.ColorAllContainer>
      {
        arrayColors.map((item: any, i: number) => {
          let arrayItemValues = Object.values(item)
          let arrayItemKeys = Object.keys(item)
          return (
            <Fragment key={i} >
              {
                <S.ColorContainerGiant>
                  <S.TitleContainerGiant> <span> nome da cor: </span> {arrayNameColors[i]} </S.TitleContainerGiant>
                  {
                    arrayItemValues.map((color: any, i2: number) => {
                        let wdth = arrayItemKeys[i2] === 'c500' ? '100%' : '64px'
                        return (
                          <Fragment key={i2}>
                            {
                              <S.Color
                                areaName={arrayItemKeys[i2]}
                                bgColor={color}
                                w={wdth}
                              >
                                <S.NameColor> {arrayItemKeys[i2]} </S.NameColor>
                                <S.HexColor> {`${color}`.toUpperCase()} </S.HexColor>
                              </S.Color>
                            }
                          </Fragment>
                      )
                    })
                  }
                </S.ColorContainerGiant>
              }
            </Fragment>
          )
        })
      }
    </S.ColorAllContainer>
  </S.SectionContainer>
  )
}

export default ViewColors