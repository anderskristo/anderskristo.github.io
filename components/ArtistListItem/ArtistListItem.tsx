import styled from 'styled-components';
import Link from 'next/link';
import { Artist } from '../../utils/types';

interface Props {
  artist: Artist;
}

const ArtistListItem = (props: Props) => {
  const { artist } = props;
  
  return (
    <Wrapper>
      <div><Link href={artist.artistUrl}>{artist.title}</Link></div>
      <div>{artist.genres}</div>
    </Wrapper>
  );
};

export default ArtistListItem;

const Wrapper = styled.div`
  margin-bottom: 15px;
  > div {
    a {
      text-decoration: none; color: white;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
    &:last-child {
      font-size: 14px;
      color: #8b8b8b;
    }
  }
`;