const axios = require('axios').default;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export async function getTopArtists() {
  try {
    const response = await instance.get('top-artists');
    return response.data.artists;
  } catch (error: any) {
    throw new Error(error);
  }
};

export async function getTopTracks() {
  try {
    const response = await instance.get('top-tracks');
    return response.data.tracks;
  } catch (error: any) {
    throw new Error(error);
  }
};

export async function getNowPlaying() {
  try {
    const response = await instance.get('now-playing');
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export async function getLyrics(artist: string, song: string) {
  try {
    const response = await instance.get(`genius/get-song?artist=${artist}&song=${song}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};