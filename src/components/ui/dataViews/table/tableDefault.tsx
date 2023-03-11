import { Fragment, useEffect, useState } from 'react'
import { ITableDefault, IColumnConfigItem } from './interfaces';
import * as S from './styles'



export default function TableDefault({
  data = [],
  columnsConfig = [],
}: ITableDefault) {

  const [columns, setColumns] = useState<any[]>(
    columnsConfig.map(
      (column) => { if(!column.hide) return column }
    ).filter((column) => column !== undefined)
  )

  useEffect(() => {
    setColumns(
      columnsConfig.map(
        (column) => { if(!column.hide) return column }
      ).filter((column) => column !== undefined))
  }, [columnsConfig])

  return (
    <S.ContainerAllTable>
      <S.ContainerTable qtdColumns={`${columns.length}`}>
      <S.ContainerTableTitleHeader> {`Nome da tabela`} </S.ContainerTableTitleHeader>
        {
          columns.map((v: IColumnConfigItem, i) => {
            return (
              <Fragment key={i}>
                <S.CellHeader> {v.name} </S.CellHeader>
              </Fragment>
            )
          })
        }
      {
        data?.map((row: any, i: number) => (
            <Fragment key={i} >
              { columns.map((column: IColumnConfigItem, i2) => (
                  <Fragment key={i2}>
                    <S.CellRows> {
                      column.valueComponent ?
                      column.valueComponent(row[`${column.keyColumn}`]) :
                      row[`${column.keyColumn}`]
                    } </S.CellRows>
                  </Fragment>
                )
              ) }
            </Fragment>
          )
        )
      }
      </S.ContainerTable>
    </S.ContainerAllTable>
  )
}