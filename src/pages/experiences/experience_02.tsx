'use client'
import { useEffect } from 'react'
import styled from 'styled-components'
import HeadDefault from '@/components/head'
import { MainDefault } from '@/components/ui/layout/main'
import TableDefault from '@/components/ui/dataViews/table/tableDefault'
import CheckboxDefault from '@/components/ui/controls/checkbox/checkboxDefault'



const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const DivCell = styled.div`
  padding: 8px;
`

const columnsDados = [
  {
    name: 'Coluna 01',
    keyColumn: 'col_01',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 02',
    keyColumn: 'col_02',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>,
    hide: false
  },
  {
    name: 'Coluna 03',
    keyColumn: 'col_03',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 04',
    keyColumn: 'col_04',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 05',
    keyColumn: 'col_05',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 06',
    keyColumn: 'col_06',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 07',
    keyColumn: 'col_07',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
  {
    name: 'Coluna 08',
    keyColumn: 'col_08',
    valueComponent: (value: any) => <DivCell>{value}</DivCell>
  },
]
const columnsDados2 = [
  { name: 'Coluna 01', keyColumn: 'col_01'},
  { name: 'Coluna 02', keyColumn: 'col_02'},
  { name: 'Coluna 03', keyColumn: 'col_03'},
  { name: 'Coluna 04', keyColumn: 'col_04'},
]

const dados = [
  {
    col_01: 'valor 01',
    col_02: 'valor 02',
    col_03: 'valor 03',
    col_04: 'valor 04',
    col_05: 'valor 05',
    col_06: 'valor 06',
    col_07: 'valor 07',
    col_08: 'valor 08',
  },
  {
    col_01: 'valor 09',
    col_02: 'valor 10',
    col_03: 'valor 11',
    col_04: 'valor 12',
    col_05: 'valor 13',
    col_06: 'valor 14',
    col_07: 'valor 15',
    col_08: 'valor 16',
  },
  {
    col_01: 'valor 17',
    col_02: 'valor 18',
    col_03: 'valor 19',
    col_04: 'valor 20',
    col_05: 'valor 21',
    col_06: 'valor 22',
    col_07: 'valor 23',
    col_08: 'valor 24',
  },
  {
    col_01: 'valor 25',
    col_02: 'valor 26',
    col_03: 'valor 27',
    col_04: 'valor 28',
    col_05: 'valor 29',
    col_06: 'valor 30',
    col_07: 'valor 31',
    col_08: 'valor 32',
  },
]

const dados2 = [
  {
    col_01: 'valor 01',
    col_02: 'valor 02',
    col_03: 'valor 03',
    col_04: 'valor 04',
  },
  {
    col_01: 'valor 05',
    col_02: 'valor 06',
    col_03: 'valor 07',
    col_04: 'valor 08',
  },
  {
    col_01: 'valor 09',
    col_02: 'valor 10',
    col_03: 'valor 11',
    col_04: 'valor 12',
  },
  {
    col_01: 'valor 13',
    col_02: 'valor 14',
    col_03: 'valor 15',
    col_04: 'valor 16',
  },
  {
    col_01: 'valor 17',
    col_02: 'valor 18',
    col_03: 'valor 19',
    col_04: 'valor 20',
  },
]

export default function Experience_02() {


  return (
    <ContainerAll>
      <TableDefault data={dados} columnsConfig={columnsDados}/>
      <TableDefault data={dados2} columnsConfig={columnsDados2} />
      <CheckboxDefault text='lembrar senha' />
    </ContainerAll>
  )
}