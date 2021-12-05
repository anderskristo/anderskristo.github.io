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
  position: fixed;
  bottom: 25px;
  width: 100%;
`;

const Copyright = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  padding-top: 25px;
`;