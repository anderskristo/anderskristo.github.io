const GET_SONGS = 'https://api.genius.com/artists/37258/songs?per_page=50';
const SEARCH_SONG = 'https://api.genius.com/search?q=';
const access_token = process.env.GENIUS_ACCESS_TOKEN;

export const getSongs = async (page = '1' as string) => {
  return fetch(`${GET_SONGS}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getSong = async (artist: string, song: string) => {
  return fetch(`${SEARCH_SONG}${encodeURIComponent(artist + ' ' + song)}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};