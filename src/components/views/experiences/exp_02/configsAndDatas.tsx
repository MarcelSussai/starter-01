// import * as I from './interfaces'
import { IColumnConfigItem } from '@/components/ui/dataViews/table/interfaces'
import * as S from './styles'
import { formatAsPercentage } from '@/utils/formatAsPercentage';

export const columnsDados = [
  {
    name: 'Coluna 01',
    keyColumn: 'col_01',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 02',
    keyColumn: 'col_02',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>,
  },
  {
    name: 'Coluna 03',
    keyColumn: 'col_03',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 04',
    keyColumn: 'col_04',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 05',
    keyColumn: 'col_05',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 06',
    keyColumn: 'col_06',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 07',
    keyColumn: 'col_07',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: 'Coluna 08',
    keyColumn: 'col_08',
    valueComponent: (value: any) => <S.DivCell>{value}</S.DivCell>
  },
]
export const columnsDados2 = [
  { name: 'Coluna 01', keyColumn: 'col_01'},
  { name: 'Coluna 02', keyColumn: 'col_02'},
  { name: 'Coluna 03', keyColumn: 'col_03'},
  { name: 'Coluna 04', keyColumn: 'col_04'},
]
/*
  regra pra estipular valores para o grid da tabela:
  ter pelo menos um item com medida fracionária fr, exemplo:
  numa tabela de 4 colunas sem contar a coluna de checkbox,
  o valor da configuração dos tamanhos das colunas seria:
  ' 64px 1fr 64px 1fr ' ou ' 64px 1fr 64px 64px '
  mas NÃO pode ser: ' 64px 64px 64px 64px '
  para valores que o conteúdo pode ser maior ou menor que o valor usar minmax() function css
*/
export const configDynamicSizeColumns = [
  {min: '80px', max: '80px', idKey: 'id'},
  {min: '200px', max: '1fr', idKey: 'description' },
  {min: '96px', max: '96px', idKey: 'percentage'},
  {min: '136px', max: '136px', idKey: 'date'},
  {min: '200px', max: '.4fr', idKey: 'monetaryValue'},
]
export const columnsConfigRealData: IColumnConfigItem[] = [
  {
    name: 'ID',
    keyColumn: 'id',
    valueComponent: (value) => <S.DivCell3>{value}</S.DivCell3>
  },
  {
    name: 'Descrição',
    keyColumn: 'description',
    valueComponent: (value) => <S.DivCell>{value}</S.DivCell>
  },
  {
    name: '%',
    keyColumn: 'percentage',
    valueComponent: (value) => <S.DivCell3>{formatAsPercentage(Number(value))}</S.DivCell3>
  },
  {
    name: 'Data',
    keyColumn: 'date',
    valueComponent: (value) => <S.DivCell3>{new Date(value).toLocaleDateString()}</S.DivCell3>
  },
  {
    name: 'Valor',
    keyColumn: 'monetaryValue',
    valueComponent: (value) => {
      let editValue = value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      return (
        <S.DivCell2>
          <div className='cifra'>{'R$'}</div>
          <div className='value'>{ `${editValue}`.replace('R$', '').trim() }</div>
        </S.DivCell2>
      )
    }
  },
]

export const dados = [
  {
    id: '01',
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
    id: '02',
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
    id: '03',
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
    id: '04',
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

export const dados2 = [
  {
    id: '01',
    col_01: 'valor 01',
    col_02: 'valor 02',
    col_03: 'valor 03',
    col_04: 'valor 04',
  },
  {
    id: '02',
    col_01: 'valor 05',
    col_02: 'valor 06',
    col_03: 'valor 07',
    col_04: 'valor 08',
  },
  {
    id: '03',
    col_01: 'valor 09',
    col_02: 'valor 10',
    col_03: 'valor 11',
    col_04: 'valor 12',
  },
  {
    id: '04',
    col_01: 'valor 13',
    col_02: 'valor 14',
    col_03: 'valor 15',
    col_04: 'valor 16',
  },
  {
    id: '05',
    col_01: 'valor 17',
    col_02: 'valor 18',
    col_03: 'valor 19',
    col_04: 'valor 20',
  },
]

