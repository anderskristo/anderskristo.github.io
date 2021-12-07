import styled from 'styled-components';

const Footer = () => {
  const date = new Date();

  return (
    <Wrapper>
      <Copyright>&copy; {date.getFullYear()} the-anders-company</Copyright>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  color: white;
  width: 100%;
  padding: 100px 15px 25px;
`;

const Copyright = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-top: 25px;
`;