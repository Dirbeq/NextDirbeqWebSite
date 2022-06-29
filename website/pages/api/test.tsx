import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: string
}  
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ status: "Ok!" })
}