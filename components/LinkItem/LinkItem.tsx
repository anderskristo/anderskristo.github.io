import styled from 'styled-components';
import { LinkType } from '../../utils/types';

interface Props {
  link: LinkType;
}

const LinkItem = (props: Props) => {
  const { link } = props;
  return (
    <ListItem>
      <a href={link.url} target={link.target}>
        {link.text}
      </a>
    </ListItem>
  );
};

export default LinkItem;

const ListItem = styled.li`
  display: block;
  margin-bottom: 10px;
  &:last-child { margin-bottom: 0; }
  a {
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.2s ease;
    text-transform: uppercase;
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.colors.primary_darker};
    }
  }
`;