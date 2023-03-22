import { ImakeColorsTone } from "@/theme/colorsScheme/makingTones"



export interface IAllStyle {
  color1: string
  color2: string
  color3: string
  colorString: string
}

export interface IResults {
  id?: string | number
}

export interface IGridTable {
  sizesString: string | undefined
  optionsColumns?: string | undefined
  alternate?: boolean
  isLast?: boolean
  isFirst?: boolean
}

export interface ITableData {
  status: number
  results?: IResults[]
}

export interface IsizeOfColumn {
  min: string
  max?: string | undefined
}

export interface IOptionsTable {
  selectable?: boolean
  expandable?: boolean
  showOptionsColumn?: boolean
  showSerchButton?: boolean
  showFilters?: boolean
  showColumnsConfig?: boolean
  showDeleteBySelection?: boolean
}

export interface ICollunnsConfig {
  idKey: string
  name: string
  order: number
  ValueComponent?: (value: string | number) => JSX.Element
  HeaderComponent?: (value: string | number) => JSX.Element
  sizeOfColumn?: IsizeOfColumn | undefined
  hideByDefault?: boolean
}

export interface IuseTable {
  configColumns: ICollunnsConfig[]
}

export interface ICellHeader {
  isLast?: boolean
  isFirst?: boolean
}

export interface ICellRow {
  isLast?: boolean
  isFirst?: boolean
}

export interface ITable {
  data: ITableData | undefined
  configColumns: ICollunnsConfig[]
  color1?: string | 'default'
  color2?: string | 'main'
  color3?: string | 'second'
  title?: string
  showCheck?: boolean
  showOptionsCell?: boolean
  componentOptionsCell?: (rowId: string | number) => JSX.Element
  alternateBg?: boolean
  onChangeSelecteds?: (selecteds: string[]) => void
  onChangeClicked?: (rowId: string) => void
  isLoading?: boolean
}
