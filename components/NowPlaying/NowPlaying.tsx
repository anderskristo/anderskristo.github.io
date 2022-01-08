import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Playing } from '../../utils/types';

interface Props {
  song: Playing;
}

const NowPlaying = (props: Props) => {
  const { song } = props;

  const imageLoader = () => {
    return song.albumImageUrl;
  }

  return (
    <Wrapper>
      <Heading>Now Playing:</Heading>
      {song &&
        <Image
          loader={imageLoader}
          src={song.albumImageUrl}
          alt={song.album}
          width={50}
          height={50}
        />
      }
      <SongInformation>
        <Link href={song.songUrl}>{song.title}</Link>
        <Artist>{song.artist}</Artist>
      </SongInformation>
    </Wrapper>
  );
};

export default NowPlaying;

const Wrapper = styled.div`
  margin: 25px 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Heading = styled.h3`
  width: 100%;
  margin-bottom: 10px;
`;

const SongInformation = styled.div`
  margin-left: 10px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Artist = styled.div`
`;