export interface LinkType {
  text: string;
  url: string;
  target: string;
};

export interface Image {
  height: number;
  width: number;
  url: string;
};

export interface Artist {
  title: string;
  artistUrl: string;
  genres: string[];
  images: Image[];
};

export interface Track {
  artist: string;
  songUrl: string;
  title: string;
  artistUrl: string;
};

export interface Playing {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};