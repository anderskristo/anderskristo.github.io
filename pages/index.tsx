import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { MainLayout } from '../layout';
import { LinkItem } from '../components/';
import { LinkType } from '../utils/types';

const Home: NextPage = () => {
  const links:LinkType[] = [
    {
      text: 'Music',
      url: '/music',
      target: '_self',
    },
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
    <MainLayout title="anderskristo, this is me." description="anderskristo, this is me.">
      <Links>
        {links.map((link: LinkType, index: number) => {
          return <LinkItem link={link} key={index} />;
        })}
      </Links>
    </MainLayout>
  )
};

export default Home;

const Links = styled.ul`
  padding: 0;
  margin: 50px 0 0;
`;