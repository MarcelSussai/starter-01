import { Fragment, useEffect, useState } from 'react'
import { ITableDefault, IColumnConfigItem } from './interfaces';
import * as S from './styles'
import CheckboxDefault from '../../controls/checkbox/checkboxDefault';
import TableRow from './tableRow';
import ArrowUp from '../../icons/arrowUp';
import Loading from '../../controls/loading/loading';



export default function TableDefault({
  data = [],
  columnsConfig = [],
  configSizeColumns,
  color = 'default',
  isLoading = false,
}: ITableDefault) {

  const [columns, setColumns] = useState<any[]>(
    columnsConfig.map(
      (column) => { if(!column.hide) return column }
    ).filter((column) => column !== undefined)
  )
  const [selectAll, setSelectAll] = useState(false)
  const [arraySelect, setArraySelect] = useState<string[]>([])
  const [clickedKeyColumn, setClickedKeyColumn] = useState<string>()

  useEffect(() => {
    if (clickedKeyColumn !== undefined) console.log('clickedKeyColumn', clickedKeyColumn)
  }, [setClickedKeyColumn, clickedKeyColumn])

  useEffect(() => {
    setColumns(
      columnsConfig.map(
        (column) => { if(!column.hide) return column }
      ).filter((column) => column !== undefined))
  }, [columnsConfig])
  useEffect(() => { console.log(arraySelect) }, [arraySelect, setArraySelect])

  const handleCheck = () => {
    setSelectAll(!selectAll)
    let rawSelecteds: string[] = []
    if(!selectAll) { data?.map((row) => { rawSelecteds.push(`${row.id}`) }) }
    setArraySelect(rawSelecteds)
  }

  return (
    <S.ContainerAll color={color.toString()}>
      <S.ContainerAllTable>
        <S.ContainerTable qtdColumns={configSizeColumns || columns.length}>
          <S.ContainerTableTitleHeader> Título </S.ContainerTableTitleHeader>
          <S.CellSelectHeader qtd={arraySelect.length}>
            <CheckboxDefault color={color} checked={selectAll} onChange={handleCheck} hideText />
          </S.CellSelectHeader>
          {
            columns.map((column: IColumnConfigItem, i) => {
              return (
                <Fragment key={i}>
                  <S.CellHeader
                    onClick={() => setClickedKeyColumn(column.keyColumn)} size={column.size}
                    isFirst={i === 0} isLast={i === (columns.length - 1)}
                  >
                    <S.CellHeaderText>
                      {
                        column.headerColumnComponent ?
                        column.headerColumnComponent(column.name) :
                        column.name
                      }
                    </S.CellHeaderText>
                    <S.CellHeaderDetail> <ArrowUp color={color} /> </S.CellHeaderDetail>
                  </S.CellHeader>
                </Fragment>
              )
            })
          }
          {
            isLoading ? <Loading /> :
            data?.map((row: any, i: number) => (
                <Fragment key={i} >
                  <TableRow
                    columns={columns}
                    row={row}
                    selectAll={selectAll}
                    arraySelect={arraySelect}
                    setArraySelect={setArraySelect}
                    color={color}
                  />
                </Fragment>
              )
            )
          }
        </S.ContainerTable>
      </S.ContainerAllTable>
    </S.ContainerAll>
  )
}