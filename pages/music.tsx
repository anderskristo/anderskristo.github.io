import type { NextPage, GetStaticProps  } from 'next';
import styled from 'styled-components';
import { getTopArtists, getTopTracks } from '../utils/api';
import { Artist, Track } from '../utils/types';
import { MainLayout } from '../layout';
import { ArtistListItem, TrackListItem} from '../components';

interface Props {
  artists: Artist[];
  tracks: Track[];
};

export default function MusicPage(props: Props) {
  const { artists, tracks } = props;


  return (
    <MainLayout title="anderskristo, this is my music." description="anderskristo, this is my music.">
      <ListsWrapper>
        <ListWrapper>
          <Heading>Top Artists</Heading>
          {artists.map((artist: Artist, index: number) => {
            return <ArtistListItem artist={artist} key={index} />;
          })}
        </ListWrapper>
        <ListWrapper>
          <Heading>Top Tracks</Heading>
          {tracks.map((track: Track, index: number) => {
            return <TrackListItem track={track} key={index} />;
          })}
        </ListWrapper>
      </ListsWrapper>
    </MainLayout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const artists = await getTopArtists().catch((error) => {
    console.error(error);
  });

  const tracks = await getTopTracks().catch((error) => {
    console.error(error);
  });

  return {
    props: {
      artists: artists || null,
      tracks: tracks || null,
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