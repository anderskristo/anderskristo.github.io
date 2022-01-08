import type { NextPage, GetStaticProps  } from 'next';
import styled from 'styled-components';
import { getTopArtists, getTopTracks, getNowPlaying } from '../utils/api';
import { Artist, Track, Playing } from '../utils/types';
import { MainLayout } from '../layout';
import { ArtistListItem, TrackListItem, NowPlaying} from '../components';

interface Props {
  artists: Artist[];
  tracks: Track[];
  playing: Playing;
};

export default function MusicPage(props: Props) {
  const { artists, tracks, playing } = props;

  return (
    <MainLayout title="anderskristo, this is my music." description="anderskristo, this is my music.">
      {playing &&
        <NowPlaying song={playing} />
      }
      <ListsWrapper>
        <ListWrapper>
          <Heading>Top Artists</Heading>
          {artists &&
            artists.map((artist: Artist, index: number) => {
              return <ArtistListItem artist={artist} key={index} />;
            })
          }
        </ListWrapper>
        <ListWrapper>
          <Heading>Top Tracks</Heading>
          {tracks &&
            tracks.map((track: Track, index: number) => {
              return <TrackListItem track={track} key={index} />;
            })
          }
        </ListWrapper>
      </ListsWrapper>
      <InfoText>Data provided by <a href="https://spotify.com" target="_blank" rel="noreferrer">Spotify</a></InfoText>
    </MainLayout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const artists = await getTopArtists().catch((error: any) => {
    console.error(error);
  });

  const tracks = await getTopTracks().catch((error: any) => {
    console.error(error);
  });

  const playing = await getNowPlaying().catch((error: any) => {
    console.error(error);
  });

  return {
    props: {
      artists: artists || null,
      tracks: tracks || null,
      playing: playing || null,
    },
    revalidate: 10,
  };
};

const ListsWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10%;
    margin-bottom: 0;
  }
`;

const ListWrapper = styled.div`
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Heading = styled.h3`
  border-bottom: 1px solid white;
`;

const InfoText = styled.div`
  margin-top: 20px;
  font-size: 12px;
  font-style: italic;
  a { color: inherit; }
`;