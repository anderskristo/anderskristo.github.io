import styled from 'styled-components';
import { Heading } from '../../components';

const Header = () => {
  return (
    <Wrapper>
      <Heading link="/">Hey, I&apos;m Anders.</Heading>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 25px 15px 0;
`;