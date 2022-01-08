import type { NextApiResponse, NextApiRequest } from 'next';
import { getSong } from '../../../lib/genius';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artist, song } = req.query;
  try {
    const response = await getSong(artist as string, song as string);
    const { response: { hits } } = await response.json();

    return res.json({ hits });
  } catch (error: any) {
    throw new Error(error);
  }
};