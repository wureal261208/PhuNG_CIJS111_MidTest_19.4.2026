import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import NewRelease from '../components/home/NewRelease';

const Home = () => {
  const newReleases = [
    {
      id: 1,
      title: 'One Piece',
      episode: 'Episode 1018',
      image: 'https://picsum.photos/id/1015/300/420',
    },
    {
      id: 2,
      title: 'Boruto Naruto Next Generations',
      episode: 'Episode 250',
      image: 'https://picsum.photos/id/102/300/420',
    },
    {
      id: 3,
      title: 'Spy X Family',
      episode: 'Episode 07',
      image: 'https://picsum.photos/id/201/300/420',
    },
    {
      id: 4,
      title: 'Shingeki no Kyojin',
      episode: 'Episode 28',
      image: 'https://picsum.photos/id/29/300/420',
    },
    {
      id: 5,
      title: 'Captain Tsubasa',
      episode: 'Episode 28',
      image: 'https://picsum.photos/id/30/300/420',
    },
    {
      id: 6,
      title: 'Aoashi',
      episode: 'Episode 28',
      image: 'https://picsum.photos/id/1005/300/420',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#050812' }}>
      <AppHeader />
      <Layout.Content style={{ padding: '30px 24px 80px' }}>
        <div style={{ maxWidth: 1260, margin: '0 auto' }}>
          <HeroBanner />
          <NewRelease animes={newReleases} />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Home;