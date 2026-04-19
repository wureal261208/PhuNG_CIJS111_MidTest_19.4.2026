// components/home/NewReleaseCard.jsx
import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const NewReleaseCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${anime.id}`);   // Ví dụ: /detail/1
  };

  return (
    <Card
      hoverable
      onClick={handleClick}
      style={{
        width: 260,
        minWidth: 260,
        backgroundColor: '#0f172a',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.16)',
      }}
      bodyStyle={{ padding: '16px 16px 18px' }}
      cover={
        <img
          alt={anime.title}
          src={anime.image}
          style={{ height: 382, objectFit: 'cover', display: 'block' }}
        />
      }
    >
      <Card.Meta
        title={<span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700 }}>{anime.title}</span>}
        description={<span style={{ color: '#94a3b8', fontSize: '14px' }}>{anime.episode}</span>}
      />
    </Card>
  );
};

export default NewReleaseCard;