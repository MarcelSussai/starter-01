
import { useEffect, useState } from 'react'
import * as I from './interfaces'


const useTable = ({
  columnsConfig,
  sizesOfColumns,
  hiddenColumns,
}: I.IuseTable) => {

  const [columns, setColumns] = useState(columnsConfig)
  const [sizes, setSizes] = useState<I.ISize[] | undefined>(sizesOfColumns)
  const [sizeString, setSizeString] = useState<string>()
  const [hiddens, setHiddens] = useState<string[] | undefined>(hiddenColumns)
  useEffect(() => {console.log('columns', columns)}, [columns])
  useEffect(() => {console.log('sizes', sizes)}, [sizes])
  useEffect(() => {console.log('hiddens', hiddens)}, [hiddens])

  const updateColumns = (hides: string[]) => {
    let raw: I.IColumnConfigItem[] = []
    columns.map((col1, i) => {
      if(!hides?.includes(col1.keyColumn)) {
        raw.push(col1)
      }
    })
    setColumns(raw)
  }

  const updateSizeOfColumns = () => {
    let raw: I.ISize[] = []
    sizes?.map((size, i) => {
      if(!hiddens?.includes(size.idKey)) {
        raw.push(size)
      }
    })
    setSizes(raw)
  }

  return { columns, sizes, updateColumns, updateSizeOfColumns }
}

export default useTable