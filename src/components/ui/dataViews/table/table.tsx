'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as I from './interfaces'
import * as S from './styles'
import CheckboxDefault from '../../controls/checkbox/checkboxDefault';
import useTable from './useTable';
import ArrowUp from '../../icons/arrowUp';
import ColumnsIcon from '../../icons/columnsIcon';
import Loading from '../../controls/loading/loading';
import { isClickOutside } from '@/utils/isClickedOutSide';
import { useTheme } from 'styled-components';
import useColors from '@/hooks/useColors';


const refineOptionsOfRow = (
  showCheck: boolean, showOptionsCell: boolean, sizesString: string | undefined
) => {
  if (showOptionsCell && showCheck) return ` minmax(40px, 64px) minmax(40px, 40px) ${sizesString} `
  if (!showOptionsCell && showCheck) return ` minmax(40px, 40px) ${sizesString} `
  if (showOptionsCell && !showCheck) return ` minmax(40px, 64px) ${sizesString} `
  if (!showOptionsCell && !showCheck) return sizesString
}

export default function Table ({
  data,
  configColumns,
  color1 = 'default',
  color2 = 'main',
  color3 = 'second',
  title = 'Título de Exemplo da Tabela',
  showCheck = true, alternateBg = true,
  showOptionsCell = true, isLoading,
  componentOptionsCell, onChangeSelecteds, onChangeClicked
}: I.ITable) {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const {colorString} = useColors({wantedColors: [color1, color2, color3]})

  const {hiddens, columnsToShow, showOrHideColumn, sizeString} = useTable({ configColumns })
  
  const [results, setResults] = useState<any[]>()
  const [sizesCompositeString, setSizesCompositeString] = useState(refineOptionsOfRow(showCheck, showOptionsCell, sizeString))
  const [clickedKeyColumn, setClickedKeyColumn] = useState<string>()
  const [sortMode, setSortMode] = useState(false)
  const [selectAll, setSelecAll] = useState<boolean>(false)
  const [selectedsRows, setSelectedRows] = useState<string[]>([])
  const [clickedRow, setClickedRow] = useState<string>('')
  const [btnShowColumns, setBtnShowColumns] = useState<boolean>(false)
  
  const Ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isClickOutside(Ref, event)) setBtnShowColumns(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => { document.removeEventListener('mousedown', handleClickOutside) }
  })

  const handleBtnShowColumns = () => setBtnShowColumns(!btnShowColumns)

  useEffect(() => {onChangeClicked?.(clickedRow)}, [onChangeClicked, clickedRow])

  useEffect(() => {onChangeSelecteds?.(selectedsRows)}, [selectedsRows, onChangeSelecteds])
  useEffect(() => {
    let raw: string[] = []
    if(selectAll) {
      results && results.map((row) => {
        raw.push(row.id.toString())
        setSelectedRows(raw)
      } )
    } else { setSelectedRows(raw) }
  }, [selectAll, results])

  const handleCheckRow = (rowIndex: string) => {
    let raw: string[] = []
    if(selectedsRows?.includes(rowIndex)) {
      raw = selectedsRows.filter(sel => {if (sel !== rowIndex) return sel})
      setSelectedRows(raw)
    } else {
      raw = [...selectedsRows, rowIndex]
      setSelectedRows(raw)
    }
  }


  useIsomorphicLayoutEffect(() => {
    setSizesCompositeString(refineOptionsOfRow(showCheck, showOptionsCell, sizeString))
  }, [sizeString, showCheck, showOptionsCell])
  useEffect(() => { if(data?.status === 200) { setResults(data?.results) } }, [data])


  return (
    <>
      <S.All colorString={colorString}
        color1={color1}
        color2={color2}
        color3={color3}
      >
        <S.ContainertableOptions ref={Ref}>
          <S.ContainerIconOption onClick={handleBtnShowColumns}>
            <ColumnsIcon width='24px' color={color1} show />
          </S.ContainerIconOption>
          {
            btnShowColumns &&
            <S.ConatinerColumnsToShow>
              {
                configColumns?.map((col, i1) => (
                  <CheckboxDefault
                    text={col.name}
                    key={i1} color={color1}
                    onChange={() => showOrHideColumn(col)}
                    checked={!hiddens.includes(col)}
                  />
                ))
              }
            </S.ConatinerColumnsToShow>
          }
        </S.ContainertableOptions>
        <S.ContainerAllScroll>
          <S.ContainerAll>

            <S.ContainerAllTable>
              <S.ContainerTableGridTitle sizesString={sizesCompositeString}>
                <S.ContainerTableTitle> {title} </S.ContainerTableTitle>
              </S.ContainerTableGridTitle>
              {
                isLoading ? <Loading /> : results &&
                <>
                  <S.ContainerTableHeader sizesString={sizesCompositeString}>
                    { showOptionsCell && (<S.CellOptionHeader>opt</S.CellOptionHeader>) }
                    { showCheck && (<S.CellSelectionHeader>
                      <CheckboxDefault
                        checked={selectAll} horizontalAlignment='center'
                        onChange={() => setSelecAll(!selectAll)} hideText
                        color={color1} noBg
                      />
                    </S.CellSelectionHeader>) }
                    {
                      columnsToShow.map((col, i1) => (
                        <S.CellHeader key={i1}
                          onClick={() => {
                            setClickedKeyColumn(col?.idKey)
                            if(clickedKeyColumn === col?.idKey) setSortMode(!sortMode)
                          }}
                          isFirst={i1 === 0} isLast={i1 === (columnsToShow.length - 1)}
                        >
                          <S.CellHeaderText> {col.name} </S.CellHeaderText>
                          <S.CellHeaderDetail>
                              <ArrowUp
                                color={color1}
                                show={(clickedKeyColumn === col?.idKey)}
                                mode={sortMode ? 'up' : 'down'}
                              />
                          </S.CellHeaderDetail>
                        </S.CellHeader>
                      ))
                    }
                  </S.ContainerTableHeader>
                  {
                    results?.map((row, i1) => {
                      return (
                      <S.ContainerTableRow
                        key={i1} sizesString={sizesCompositeString}
                        alternate={(alternateBg ? !(i1 % 2 === 0) : false)}
                        onClick={() => setClickedRow(row.id.toString())}
                        isLast={i1 === (results.length - 1)}
                        isFirst={i1 === 0}
                      >
                        { showOptionsCell && <S.CellOption>opt</S.CellOption> }
                        { showCheck && <S.CellSelection>
                          <CheckboxDefault
                            checked={selectedsRows.includes(row.id.toString())}
                            onChange={() => handleCheckRow(row.id.toString())} hideText
                            horizontalAlignment='center'
                            color={color1} noBg
                          />
                        </S.CellSelection> }
                        {
                          columnsToShow.map((col, i2) => (
                            <S.CellRow
                              key={i2}
                              isLast={i2 === (columnsToShow.length - 1)}
                              isFirst={i2 === 0}
                            >
                              {
                                col.ValueComponent ?
                                col.ValueComponent(row[col.idKey]) :
                                row[col.idKey]
                              }
                            </S.CellRow>
                          ))
                        }
                      </S.ContainerTableRow>
                    )})
                  }
                </>
              }
              <S.ContainerTableGridFooter sizesString={sizesCompositeString}>

                <S.ContainerAllFooterTable>
                  teste
                </S.ContainerAllFooterTable>
              </S.ContainerTableGridFooter>
            </S.ContainerAllTable>
            
          </S.ContainerAll>
        </S.ContainerAllScroll>
      </S.All>
    </>
  )
}