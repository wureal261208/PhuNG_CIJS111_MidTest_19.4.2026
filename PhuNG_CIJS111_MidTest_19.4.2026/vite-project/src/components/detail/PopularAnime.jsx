import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const popularAnimes = [
  { id: 1, image: 'https://picsum.photos/id/1015/300/420', title: 'One Piece' },
  { id: 2, image: 'https://picsum.photos/id/102/300/420', title: 'Boruto' },
  { id: 3, image: 'https://picsum.photos/id/201/300/420', title: 'Spy x Family' },
  { id: 4, image: 'https://picsum.photos/id/29/300/420', title: 'Attack on Titan' },
  { id: 5, image: 'https://picsum.photos/id/30/300/420', title: 'Captain Tsubasa' },
  { id: 6, image: 'https://picsum.photos/id/1005/300/420', title: 'Jujutsu Kaisen' },
];

const PopularAnime = () => {
  return (
    <div>
      <Title level={3} style={{ color: '#fff', marginBottom: '24px' }}>
        Popular Anime
      </Title>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {popularAnimes.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '12px' }}
            cover={
              <img
                src={item.image}
                alt={item.title}
                style={{ height: 180, objectFit: 'cover' }}
              />
            }
          >
            <Card.Meta
              title={<span style={{ color: '#fff' }}>{item.title}</span>}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularAnime;