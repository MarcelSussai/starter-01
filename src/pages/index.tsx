import Link from 'next/link'
import styled from 'styled-components'
import HeadDefault from '@/components/head'
import { MainDefault } from '@/components/ui/layout/main'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: ${ ({theme}) => theme.colors.default.c975 };
  color: ${ ({theme}) => theme.colors.default.c025 };
`
const MainTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 900;
  line-height: 1;
  text-align: center;
`
const SecondTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1;
  text-align: center;
`
const StyledLink = styled(Link)`
  padding: 8px 16px;
  background: ${ ({theme}) => theme.colors.default.c025 };
  color: ${ ({theme}) => theme.colors.default.c800 };
  font-weight: 800;
  transition: all .2s ease-in-out;
  border: solid 1px ${ ({theme}) => theme.colors.default.c100 };
  border-radius: 32px;

  &:hover { background: ${({theme}) => theme.colors.default.c125}; }
`
const ContainerLinksStarter = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  background: ${ ({theme}) => theme.colors.default.c050 };
  justify-content: flex-start;
`
const arrayLinks = [
  { title: 'color tools', href: '/tools/colors'},
  { title: 'experiences 01', href: '/experiences/experience_01'},
  { title: 'Teste tabelas', href: '/experiences/test'},
]

export default function Home() {
  return (
    <>
      <HeadDefault title="Home" />
      <Header>
        <MainTitle> Projeto Starter </MainTitle>
        <SecondTitle> Bem Vindo ao projeto stater ... </SecondTitle>
      </Header>
      <MainDefault>
        <ContainerLinksStarter>
          { arrayLinks.map((item, index) => (
            <StyledLink href={item.href} key={index} target='_blank'> {item.title} </StyledLink>
          )) }
        </ContainerLinksStarter>

      </MainDefault>
    </>
  )
}
