import React from 'react';
import { Typography } from 'antd';
import NewReleaseCard from './NewReleaseCard';

const { Title } = Typography;

const NewRelease = ({ animes }) => {
  return (
    <div style={{ marginTop: '70px' }}>
      <Title level={3} style={{ color: '#fff', marginBottom: '28px' }}>
        New Release
      </Title>

      <div
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '24px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {animes.map((anime) => (
          <NewReleaseCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;