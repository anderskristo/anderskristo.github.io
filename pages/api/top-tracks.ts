import type { NextApiResponse } from 'next';
import { getTopTracks } from '../../lib/spotify';

async function handler(res: NextApiResponse) {
  try {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track: any) => ({
      artist: track.artists.map((_artist: any) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    console.log('aa', tracks)
  
    return res.json({ tracks });
  } catch (error: any) {
    throw new Error(error);
  }
};

export default handler;