import type { NextApiResponse, NextApiRequest } from 'next';
import { getTopArtists } from '../../lib/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getTopArtists();
    const { items } = await response.json();

    const artists = items.slice(0, 10).map((artist: any) => ({
      artistUrl: artist.external_urls.spotify,
      title: artist.name,
      popularity: artist.popularity,
      images: artist.images,
    }));
  
    return res.json({ artists });
  } catch (error: any) {
    throw new Error(error);
  }
}