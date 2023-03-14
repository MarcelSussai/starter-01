'use client'
import { Fragment, useEffect, useState } from 'react'
import * as S from './styles'
import CheckboxDefault from '../../controls/checkbox/checkboxDefault';
import { IColumnConfigItem, ITableRow } from './interfaces';


export default function TableRow ({
  columns = [],
  row = [],
  selectAll = false,
  arraySelect = [],
  setArraySelect,
  color
}: ITableRow) {

  const [check, setCheck] = useState(false)
  const handleCheck = () => {
    let rawIds: string[] = [...arraySelect]
    let rowId = `${row.id}`
    if(!arraySelect.includes(rowId)) { rawIds.push(rowId) } else {
      rawIds = rawIds.filter((id) => rowId !== id)
    }
    if(setArraySelect) setArraySelect(rawIds)
    setCheck(!check)
  }
  useEffect(() => {
    setCheck(selectAll)
  }, [selectAll])

  return (
    <>
    <S.CellSelect> <CheckboxDefault color={color} checked={check} onChange={handleCheck} hideText /> </S.CellSelect>
    { columns.map((column: IColumnConfigItem, i) => (
        <Fragment key={i}>
          <S.CellRows size={column.size} isFirst={i === 0} isLast={i === (columns.length - 1)}>
            {
              column.valueComponent ?
              column.valueComponent(row[`${column.keyColumn}`]) :
              row[`${column.keyColumn}`]
            }
          </S.CellRows>
        </Fragment>
      )
    ) }
    </>
  )
}