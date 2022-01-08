import type { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({genius: 'yes'});
  } catch (error: any) {
    throw new Error(error);
  }
}