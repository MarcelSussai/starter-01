'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as I from './interfaces'

const transformSizesofColumns = ({min, max}: I.IsizeOfColumn) => ` minmax(${min}, ${max ? max : '1fr' }) `



export default function useTable ({
  configColumns
}: I.IuseTable) {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const hiddensDefaults = configColumns.filter(col => col.hideByDefault && col.idKey !== undefined)
  const columns = configColumns.filter(col => !col.hideByDefault && col.idKey !== undefined)

  const [hiddens, setHiddens] = useState(hiddensDefaults)
  const [columnsToShow, setColumnsToShow] = useState(columns)
  const [sizeString, setSizeString] = useState<string>()
  
  useEffect(() => {
    let raw = columnsToShow.sort((a, b) => a.order - b.order)
    setColumnsToShow(raw)
  }, [columnsToShow])

  useIsomorphicLayoutEffect(() => {
    let rawSizes: any[] = []
    let stringRaw: string = ''
    columnsToShow.map((col) => {
      if (col.sizeOfColumn) {

        rawSizes.push({
          str: transformSizesofColumns(col.sizeOfColumn),
          order: col.order
        })
      } else {
        rawSizes.push({
          str: transformSizesofColumns({min: '1fr', max: '1fr'}),
          order: col.order
        })
      }

    })
    rawSizes = rawSizes.sort((a, b) => a.order - b.order)
    rawSizes.map((size) => { stringRaw += size.str })
    setSizeString(stringRaw)
  }, [hiddens, columnsToShow])

  const showOrHideColumn = (col: I.ICollunnsConfig) => {
    let rawHiddens: I.ICollunnsConfig[] = []
    let rawShow: I.ICollunnsConfig[] = []
    if(!hiddens.includes(col)) {
      rawHiddens = [...hiddens, col]
      rawShow = columnsToShow.filter(col2 => { if(col.idKey !== col2.idKey) return col2} )
    } else if(!columnsToShow.includes(col)) {
      rawShow = [...columnsToShow, col]
      rawHiddens = hiddens.filter(col2 => { if(col.idKey !== col2.idKey) return col2} )
    }
    setHiddens(rawHiddens)
    setColumnsToShow(rawShow)
  }


  
  return {hiddens, columnsToShow, showOrHideColumn, sizeString}
}