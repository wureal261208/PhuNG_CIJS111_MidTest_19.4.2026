import React from 'react';
import { Typography } from 'antd';
import NewReleaseCard from './NewReleaseCard';

const { Title } = Typography;

const NewRelease = ({ animes }) => {
  return (
    <div style={{ marginTop: '70px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '10px' }}>
        <Title level={3} style={{ color: '#ffffff', marginBottom: 0 }}>
          New Release
        </Title>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '24px',
          marginTop: '24px',
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