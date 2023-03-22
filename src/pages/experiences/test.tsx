import Table from "@/components/ui/dataViews/table";
import { ConfigColumns } from "@/components/ui/dataViews/table/examplesData";
import { useMock01 } from "@/queries/useMock01";
import HeadDefault from '@/components/head'
import { MainDefault } from '@/components/ui/layout/main'
import { cssVarColorsMakers } from "@/theme/colorsScheme/cssVarsColorsMaker";
import { useEffect } from "react";


export default function Test () {
  const { data, error, isLoading, isSuccess } = useMock01()

  const onChangeSelecteds = (selecteds: string[]) => {
  }
  const onChangeClicked = (rowId: string) => {
  }

  return (
    <>
      <HeadDefault title="test table" />
      <MainDefault>
        <div style={{padding: '16px', width: '100%'}}>
          <Table
            color1='grey' configColumns={ConfigColumns} data={data} isLoading={isLoading}
            onChangeSelecteds={onChangeSelecteds} onChangeClicked={onChangeClicked}
          />
        </div>
      </MainDefault>
    </>
  )
}