import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Text } = Typography;

const AnimeInfo = ({ anime }) => {
  const infoList = [
    { label: 'Type', value: anime.type },
    { label: 'Status', value: anime.status },
    { label: 'Studios', value: anime.studio },
    { label: 'Duration', value: anime.duration },
    { label: 'Genres', value: anime.genres },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <Row gutter={[16, 16]}>
        {infoList.map((item, index) => (
          <Col span={12} key={index}>
            <Text strong style={{ color: '#aaa' }}>{item.label} : </Text>
            <Text style={{ color: '#fff' }}>{item.value}</Text>
          </Col>
        ))}
      </Row>

      {/* Poster nhỏ bên dưới */}
      <div style={{ marginTop: '32px', display: 'flex', gap: '24px' }}>
        <img
          src={anime.image}
          alt={anime.title}
          style={{ width: 180, borderRadius: '12px', flexShrink: 0 }}
        />
        <div>
          <Text strong style={{ color: '#fff', fontSize: '18px' }}>Synopsis :</Text>
          <p style={{ color: '#ccc', lineHeight: 1.8, marginTop: '12px' }}>
            {anime.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;