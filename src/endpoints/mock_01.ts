import { Mock01Data } from "@/queries/interfaces"



export const getMock01 = async (): Promise<Mock01Data> => {
  let data = await fetch('/api/mock01', {
    method: 'GET',
    headers: {  }}).then( response => { return response.json() })

  return data
}