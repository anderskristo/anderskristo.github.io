import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Heading } from '../components';

const Music: NextPage = () => {
  return (
    <div>
      <Head>
        <title>anderskristo, this is my music.</title>
        <meta name="description" content="anderskristo, this is my music." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading link="/">Hey, I&apos;m Anders.</Heading>
      </main>
    </div>
  )
};

export default Music;