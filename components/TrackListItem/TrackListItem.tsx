import styled from 'styled-components';
import Link from 'next/link';
import { Track } from '../../utils/types';

interface Props {
  track: Track;
}

const TrackListItem = (props: Props) => {
  const { track } = props;
  return (
    <Wrapper>
      <div><Link href={track.songUrl}>{track.title}</Link></div>
      <div><Link href={track.artistUrl}>{track.artist}</Link></div>
    </Wrapper>
  );
};

export default TrackListItem;

const Wrapper = styled.div`
  margin-bottom: 15px;
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
`;