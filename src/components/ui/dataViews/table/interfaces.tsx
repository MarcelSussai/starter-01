export interface ITableDefault {
  data: any[] | undefined
  columnsConfig: IColumnConfigItem[]
  configSizeColumns?: string
  color?: string
  isLoading?: boolean
  titleText?: string
  alternateBg?: boolean
  isSelectable?: boolean
  onChangeSelects?: (value: string[]) => void
  exbandable?: boolean
  expandableComponent?: (value: string | number ) => JSX.Element
  onDeleteClick?: (value: string[]) => void
  hiddenColumnsByDefault?: string[]
  sizesOfColumns?: ISize[]
}

export interface IuseTable {
  hiddenColumns: string[]
  sizesOfColumns: ISize[]
  columnsConfig: IColumnConfigItem[]
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
  sizes?: ISize
  hiddenByDefault?: boolean
}


  columns: (IColumnConfigItem | undefined)[]
  row: any
  selectAll?: boolean
  arraySelect?: string[]
  setArraySelect?: (value: string[]) => void
  color?: string
  alternate?: boolean
  isLast?: boolean
}

export interface ICell {
  size?: string
  isFirst?: boolean
  isLast?: boolean
  alternate?: boolean
  noBorder?: boolean
}

export interface ICellSelectHeader {
  qtd?: number
  noBorder?: boolean
}

export interface ISize {
  min: string,
  max: string
  idKey: string,
}