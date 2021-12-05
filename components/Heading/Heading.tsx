import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  children: string;
  link?: string;
}

const Heading = (props: Props) => {
  const { children, link } = props;
  return (
    <HeadingStyled>
      {link &&
        <Link href={link}>
            {children}
        </Link>
      }
    </HeadingStyled>
  );
};

export default Heading;

const HeadingStyled = styled.h1`
  font-size: 42px;
  margin: 0;

  a {
    color: white;
    text-decoration: none;
  }
`;