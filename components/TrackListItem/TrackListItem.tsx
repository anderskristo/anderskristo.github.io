import styled from 'styled-components';
import Link from 'next/link';
import { getLyrics } from '../../utils/api';
import { Track } from '../../utils/types';

interface Props {
  track: Track;
}

const TrackListItem = (props: Props) => {
  const { track } = props;

  const handleClick = async () => {
    const { hits } = await getLyrics(track.artist, track.title);
    if (hits.length !== 0 && hits[0].result.url) {
      window.open(hits[0].result.url, '_blank');
    }
  };

  return (
    <Wrapper>
      <div>
        <div><Link href={track.songUrl}>{track.title}</Link></div>
        <div><Link href={track.artistUrl}>{track.artist}</Link></div>
      </div>
      <div onClick={handleClick}>Lyrics</div>
    </Wrapper>
  );
};

export default TrackListItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  > div {
    &:last-child {
      font-size: 12px;
      cursor: pointer;
      color: #8b8b8b;
      &:hover { color: ${(props) => props.theme.colors.primary}; }
    }
    > div {
      a {
        text-decoration: none; color: white;
  
        &:hover { color: ${(props) => props.theme.colors.primary}; }
      }
      &:last-child {
        font-size: 14px;
        a {
          color: #8b8b8b;
          &:hover { color: ${(props) => props.theme.colors.primary}; }
        }
      }
    }
  }
`;