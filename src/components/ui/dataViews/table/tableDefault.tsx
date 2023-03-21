'use client'
import { Fragment, useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import * as I from './interfaces'
import CheckboxDefault from '../../controls/checkbox/checkboxDefault';
import TableRow from './tableRow';
import ArrowUp from '../../icons/arrowUp';
import Loading from '../../controls/loading/loading';
import useTable from './useTable';


export default function TableDefault({
  data = [],
  columnsConfig = [],
  color = 'default',
  isLoading = false,
  titleText = 'Título de exemplo',
  alternateBg = false,
  hiddenColumnsByDefault = ['date'],
  sizesOfColumns = [],
}: I.ITableDefault) {
  
  const [hiddenColumns, setHiddenColumns] = useState<string[]>(hiddenColumnsByDefault)
  const test = (hiddenColumns: string[], columnsConfig: I.IColumnConfigItem[]) => columnsConfig.map(column => {
    if(!hiddenColumns?.includes(column.keyColumn)) {
      if(sizesOfColumns) {
        sizesOfColumns.map(size => {
          if(size.idKey === column.keyColumn) {
            return column
          }
        }
      )}
      return column
    }
  }).filter((column) => column !== undefined)

  const [columns, setColumns] = useState(test(hiddenColumns, columnsConfig))
  const [selectAll, setSelectAll] = useState(false)
  const [arraySelect, setArraySelect] = useState<string[]>([])
  const [clickedKeyColumn, setClickedKeyColumn] = useState<string>()
  const [sortMode, setSortMode] = useState(false)
  const [sizesString, setSizesString] = useState<string>()
  const test2 = () => {
    let rawSizes: string[] = []
    let stringRaw: string = ''
    columns.map(column => {
      sizesOfColumns?.map(size => {
        if(column?.keyColumn === size.idKey) rawSizes.push(` minmax(${size.min}, ${size.max}) `)
      })
    })
    rawSizes.map((size) => { stringRaw += size })
    setSizesString(stringRaw)
  }

  // useEffect(() => {console.log('hiddenColumns', hiddenColumns)}, [hiddenColumns])
  const { columns: col, sizes, updateColumns, updateSizeOfColumns } = useTable({
    columnsConfig,
    hiddenColumns,
    sizesOfColumns
  })

  useEffect(() => {
    let rawSizes: string[] = []
    let stringRaw: string = ''
    columns.map(column => {
      sizesOfColumns?.map(size => {
        if(column?.keyColumn === size.idKey) rawSizes.push(` minmax(${size.min}, ${size.max}) `)
      })
    })
    rawSizes.map((size) => { stringRaw += size })
    setSizesString(stringRaw)
  }, [columns, sizesOfColumns])

  const handleCheck = () => {
    setSelectAll(!selectAll)
    let rawSelecteds: string[] = []
    if(!selectAll) { data?.map((row) => { rawSelecteds.push(`${row.id}`) }) }
    setArraySelect(rawSelecteds)
  }

  return (
    <S.ContainerAbsoluteAll color={color}>
      <S.ContainerOptions>
        <S.ContainerOftoShowColumns>
          {
            col.map((column, i) => {
              return (
                <S.ContainerItemShowColumn onClick={() => {
                  let raw: string[] = hiddenColumns
                  hiddenColumns.map((column2) => {
                    if(column?.keyColumn !== column2) {
                      raw.push(`${column?.keyColumn}`)
                    }
                  })
                  setHiddenColumns([...hiddenColumns, ...raw])
                  updateColumns(hiddenColumns)
                  updateSizeOfColumns()
                  // setColumns(test(hiddenColumns, columnsConfig))
                  // test2()
                }} key={i}>
                {` ${column?.keyColumn} `}
                </S.ContainerItemShowColumn>
              )
            })
          }
        </S.ContainerOftoShowColumns>
      </S.ContainerOptions>
      <S.ContainerAll color={color.toString()}>
        <S.ContainerAllTable>
          <S.ContainerTable qtdColumns={sizesString || columns.length}>
            <S.ContainerTableTitleHeader> {titleText} </S.ContainerTableTitleHeader>
            <S.CellSelectHeader noBorder></S.CellSelectHeader>
            <S.CellSelectHeader qtd={arraySelect.length}>
              <CheckboxDefault color={color} checked={selectAll} onChange={handleCheck} hideText />
            </S.CellSelectHeader>
            {
              columns.map((column: I.IColumnConfigItem | undefined, i) => {
                return (
                  <Fragment key={i}>
                    <S.CellHeader
                      onClick={() => {
                        setClickedKeyColumn(column?.keyColumn)
                        if(clickedKeyColumn === column?.keyColumn) setSortMode(!sortMode)
                      }}
                      isFirst={i === 0} isLast={i === (columns.length - 1)}
                    >
                      <S.CellHeaderText>
                        {
                          column?.headerColumnComponent ?
                          column?.headerColumnComponent(column.name) :
                          column?.name
                        }
                      </S.CellHeaderText>
                      <S.CellHeaderDetail>
                        <ArrowUp
                          color={color}
                          show={(clickedKeyColumn === column?.keyColumn)}
                          mode={sortMode ? 'up' : 'down'}
                        />
                      </S.CellHeaderDetail>
                    </S.CellHeader>
                  </Fragment>
                )
              })
            }
            {
              isLoading ? <Loading /> :
              data?.map((row: any, i: number) => (
                  <S.ContainerTableRow qtdColumns={sizesString || columns.length} key={i} >
                    <TableRow isLast={i === (data.length - 1)}
                      alternate={ (alternateBg ? !(i % 2 === 0) : false)}
                      columns={columns}
                      row={row}
                      selectAll={selectAll}
                      arraySelect={arraySelect}
                      setArraySelect={setArraySelect}
                      color={color}
                    />
                  </S.ContainerTableRow>
                )
              )
            }
          </S.ContainerTable>
        </S.ContainerAllTable>
      </S.ContainerAll>
    </S.ContainerAbsoluteAll>
  )
}