import { formatAsPercentage } from '@/utils/formatAsPercentage'
import { EllipsisCell } from '../../type/texts/ellipsisCell/styles'
import * as I from './interfaces'



export const ConfigColumns: I.ICollunnsConfig[] = [
  {
    idKey: 'id',
    name: 'ID',
    order: 1,
    ValueComponent: (value) => <>{value}</>,
    sizeOfColumn: { min: '64px' },
    hideByDefault: false,
  },
  {
    idKey: 'description',
    name: 'Descrição',
    order: 2,
    ValueComponent: (value) => <EllipsisCell>{value}</EllipsisCell>,
    sizeOfColumn: { min: '160px', max: '16fr' },
    hideByDefault: false,
  },
  {
    idKey: 'percentage',
    name: '%',
    order: 3,
    ValueComponent: (value) => <>{formatAsPercentage(Number(value))}</>,
    sizeOfColumn: { min: '96px' },
    hideByDefault: false,
  },
  {
    idKey: 'date',
    name: 'Data',
    order: 4,
    ValueComponent: (value) => <>{new Date(value.toString()).toLocaleDateString()}</>,
    sizeOfColumn: { min: '120px' },
    hideByDefault: false,
  },
  {
    idKey: 'monetaryValue',
    name: 'Valor',
    order: 5,
    ValueComponent: (value) => {
      let editValue = value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).toString().replace('R$', '').trim()
      return (<>{editValue}</>)
    },
    sizeOfColumn: { min: '200px' },
    hideByDefault: false,
  },
]

