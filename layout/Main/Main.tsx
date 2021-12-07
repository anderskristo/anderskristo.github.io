import styled from 'styled-components';
import Head from 'next/head';
import { Header, Footer } from '../../features';

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <Wrapper>
      <Head>
        <title>anderskristo | {props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div``;

const Main = styled.main`
  width: 100%;
  padding: 0 15px 100px;
`;  