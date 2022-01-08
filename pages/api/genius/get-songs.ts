import type { NextApiResponse, NextApiRequest } from 'next';
import { getSongs } from '../../../lib/genius';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  try {
    const response = await getSongs(page as string);
    const { response: { songs } } = await response.json();
    return res.json({ songs });
  } catch (error: any) {
    throw new Error(error);
  }
};