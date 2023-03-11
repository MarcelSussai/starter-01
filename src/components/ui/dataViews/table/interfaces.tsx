import { ReactNode } from "react"

export interface ITableDefault {
  data: any[]
  columnsConfig: IColumnConfigItem[]
}

export interface IGridValues {
  qtdColumns: string
}

export interface IColumnConfigItem {
  name: string
  keyColumn: string
  valueComponent?: (value: string) => ReactNode
  hide?: boolean
}