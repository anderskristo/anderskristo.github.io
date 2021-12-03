import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { LinkItem } from '../components/';
import { Link } from '../utils/types';

const Home: NextPage = () => {
  const links:Link[] = [
    {
      text: 'Github',
      url: 'https://github.com/anderskristo',
      target: '_blank',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anderskristo',
      target: '_blank',
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/anderskristo',
      target: '_blank',
    },
    {
      text: 'last.fm',
      url: 'https://www.last.fm/user/anderzxi',
      target: '_blank',
    },
  ];
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="anderskristo, this is me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Hey, I&apos;m Anders.</Heading>
        <Links>
          {links.map((link: Link, index: number) => {
            return <LinkItem link={link} key={index} />;
          })}
        </Links>
      </main>
    </div>
  )
};

export default Home;

const Heading = styled.h1`
  font-size: 42px;
  margin: 0;
`;

const Links = styled.ul`
  padding: 0;
  margin: 50px 0 0;
`;