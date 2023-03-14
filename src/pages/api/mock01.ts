// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Mock01Data } from '@/queries/interfaces'
import { mock_01 } from '@/utils/mockResponses'
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Mock01Data>
) {
  setTimeout(() => {
    res.status(200).json(mock_01)
  }, 4000)
}
