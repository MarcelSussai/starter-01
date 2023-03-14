import { ReactNode } from "react"

export interface ITableDefault {
  data: any[] | undefined
  columnsConfig: IColumnConfigItem[]
  configSizeColumns?: string
  color?: string
  isLoading?: boolean
}

export interface IContainerAll {
  color: string | 'default'
}

export interface IGridValues {
  qtdColumns: string | number
}
export interface IDataTable {
  id: string | number | undefined
}

export interface IColumnConfigItem {
  name: string
  keyColumn: string
  valueComponent?: (value: string | number) => JSX.Element
  headerColumnComponent?: (value: string | number) => JSX.Element
  hide?: boolean
  size?: string
}

export interface ITableRow {
  columns: IColumnConfigItem[]
  row: any
  selectAll?: boolean
  arraySelect?: string[]
  setArraySelect?: (value: string[]) => void
  color?: string
}

export interface ICell {
  size?: string
  isFirst?: boolean
  isLast?: boolean
}

export interface ICellSelectHEader {
  qtd: number
}