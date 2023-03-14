import { getMock01 } from '@/endpoints/mock_01'
import { useQuery } from 'react-query'


export const useMock01 = () => useQuery(['mock_01'], () => getMock01())