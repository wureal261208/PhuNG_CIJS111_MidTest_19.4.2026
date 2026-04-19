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
        backgroundColor: '#1a1a1a',
        border: 'none',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      cover={
        <img
          alt={anime.title}
          src={anime.image}
          style={{ height: 380, objectFit: 'cover' }}
        />
      }
    >
      <Card.Meta
        title={<span style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>{anime.title}</span>}
        description={<span style={{ color: '#888', fontSize: '15px' }}>{anime.episode}</span>}
      />
    </Card>
  );
};

export default NewReleaseCard;