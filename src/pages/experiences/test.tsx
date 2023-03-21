import Table from "@/components/ui/dataViews/tableGrid";
import { ConfigColumns } from "@/components/ui/dataViews/tableGrid/examplesData";
import { useMock01 } from "@/queries/useMock01";
import HeadDefault from '@/components/head'
import { MainDefault } from '@/components/ui/layout/main'
import { cssVarColorsMakers } from "@/theme/colorsScheme/cssVarsColorsMaker";
import { useEffect } from "react";


export default function Test () {
  const { data, error, isLoading, isSuccess } = useMock01()

  useEffect(() => {cssVarColorsMakers()})

  const onChangeSelecteds = (selecteds: string[]) => {
    console.log("Componente Pai Test selecionados da tabela:", selecteds)
  }
  const onChangeClicked = (rowId: string) => {
    console.log('Test - Cliquei na linha:', rowId)
  }

  return (
    <>
      <HeadDefault title="test table" />
      <MainDefault>
        <div style={{padding: '16px', width: '100%'}}>
          <Table
            color1='default' configColumns={ConfigColumns} data={data}
            onChangeSelecteds={onChangeSelecteds} onChangeClicked={onChangeClicked}
          />
        </div>
      </MainDefault>
    </>
  )
}