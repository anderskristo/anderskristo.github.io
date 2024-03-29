import type { NextApiResponse, NextApiRequest } from 'next';
import { getNowPlaying } from '../../lib/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }
    
    const song = await response.json();

    if (song.currently_playing_type === 'episode') {
      return res.status(200).json({ isPlaying: true, type: 'episode' });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });

  } catch (error: any) {
    throw new Error(error);
  }
}