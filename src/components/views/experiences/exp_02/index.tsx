import * as I from './interfaces'
import * as S from './styles'
import TableDefault from '@/components/ui/dataViews/table/tableDefault'
import CheckboxDefault from '@/components/ui/controls/checkbox/checkboxDefault'
import { useEffect, useState } from 'react'
import {
  columnsConfigRealData,
  columnsDados,
  columnsDados2,
  configDynamicSizeColumns,
  dados,
  dados2
} from './configsAndDatas'
import Loading from '@/components/ui/controls/loading/loading'
import { useMock01 } from '@/queries/useMock01'



export default function ViewExperience_02({}: I.IViewExperience_02) {
  
  const { data, error, isLoading, isSuccess } = useMock01()
  const [exampleCheck, setExampleCheck] = useState(false)
  const handleExampleCheck = () => setExampleCheck(!exampleCheck)


  return (
    <>
        <S.ContainerAll>
          <TableDefault data={dados} columnsConfig={columnsDados} />
          <TableDefault data={dados2} columnsConfig={columnsDados2} color='grey' alternateBg />
          <TableDefault
            isLoading={isLoading} alternateBg
            data={data?.results}
            columnsConfig={columnsConfigRealData}
            color='greyAzure'
            sizesOfColumns={configDynamicSizeColumns}
          />
          <CheckboxDefault checked={exampleCheck} onChange={handleExampleCheck} color='strongRed' fit />
        </S.ContainerAll>
        <Loading />
    </>
  )
}