import styled from 'styled-components'
import HeadDefault from '@/components/head'
import { MainDefault } from '@/components/ui/layout/main'


const Container = styled.div`
  transition: all .3s ease-in-out;
  padding: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  background:
    radial-gradient( ellipse at right top,
      ${ ({theme}) => theme.colors.main.c400 },
      ${ ({theme}) => theme.colors.second.c400 }24
    ),
    radial-gradient( ellipse at left bottom,
      ${ ({theme}) => theme.colors.second.c400 },
      ${ ({theme}) => theme.colors.main.c400 }24
    )
  ;
`

const Base = styled.div`
  transition: all .3s ease-in-out;
  width: fit-content;
  width: 64%;
  height: 200px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${ ({theme}) => theme.colors.grey.c075 };
  color: ${ ({theme}) => theme.colors.grey.c725 };
  font-size: 1.6rem;
  font-weight: 900;
  border-radius: 24px;
  cursor: pointer;
  z-index: 2;
`

const Claymorphism = styled(Base)`
  background: ${ ({theme}) => theme.colors.grey.c175 };
  box-shadow:
    inset -8px -8px 16px 0px ${ ({theme}) => theme.colors.grey.c675 },
    inset 8px 8px 16px 0px ${ ({theme}) => theme.colors.grey.c025 },
    16px 16px 32px 0px ${ ({theme}) => theme.colors.grey.c975 }48
  ;
  &:hover {
    background: ${ ({theme}) => theme.colors.grey.c250 };
  }
`

const Glassmorphism = styled(Base)`
  color: ${ ({theme}) => theme.colors.grey.c825 };
  background: ${ ({theme}) => theme.colors.grey.c025 }16;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.grey.c250 }48;
  border-right: solid 2px ${ ({theme}) => theme.colors.grey.c250 }48;
  border-top: solid 2px ${ ({theme}) => theme.colors.grey.c100 }64;
  border-left: solid 2px ${ ({theme}) => theme.colors.grey.c100 }64;
  box-shadow: 24px 24px 48px 0px ${ ({theme}) => theme.colors.grey.c975 }48;
  backdrop-filter: blur(8px);
  &:hover {
    background: ${ ({theme}) => theme.colors.grey.c025 }32;
  }
`

const DivEnfeite = styled.div`
  height: 100%;
  position: absolute;
  width: 16%;
  background: ${ ({theme}) => theme.colors.grey.c025 }32;
  z-index: 0;
  top: 0px;
  border-left: solid 8px ${ ({theme}) => theme.colors.main.c325 }80;
  border-right: solid 8px ${ ({theme}) => theme.colors.second.c325 }80;
`

const Minimalism = styled(Base)``

const Neumorphism = styled(Base)`
  width: 100%;
  background: linear-gradient( 180deg, #EEE, #AAA );
  border-radius: 24px;
  /* border: solid 1px #FFFFFF16; */
  box-shadow:
    24px 16px 32px 8px #00000024,
    -16px -16px 32px 8px #FFFFFFA0,
    inset 4px 4px 8px #FFFFFFA0,
    inset -4px -4px 8px #00000016
  ;
`

const ContainerForDiference = styled.div`
  padding: 128px;
  width: calc(100% + 128px);
  display: flex;
  position: relative;
  left: 0px;
  justify-content: center;
  align-items: center;
  /* border-radius: 16px; */
  background: ${ ({theme}) => theme.colors.grey.c175 }E0;
  z-index: 2;
`

export default function Experience_01() {

  return (
    <>
      <HeadDefault title="Experience_01" />
      <MainDefault>
        <Container>
          <DivEnfeite />
          <Minimalism> {`Minimalism`} </Minimalism>
          <Glassmorphism> {`Glassmorphism`} </Glassmorphism>
          <Claymorphism> {`Claymorphism`} </Claymorphism>
          <Neumorphism> {`Neumorphism`} </Neumorphism>
          <ContainerForDiference>
            <Neumorphism> {`Neumorphism`} </Neumorphism>
          </ContainerForDiference>
        </Container>
      </MainDefault>
    </>
  )
}
