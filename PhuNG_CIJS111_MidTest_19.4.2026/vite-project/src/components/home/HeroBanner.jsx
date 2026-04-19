import React from 'react';
import { Typography, Button, Space } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HeroBanner = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Title level={2} style={{ color: '#fff', marginBottom: 8 }}>
        Explore
      </Title>
      <Paragraph style={{ color: '#aaa', fontSize: '20px', marginBottom: '32px' }}>
        What are you gonna watch today ?
      </Paragraph>

      {/* Banner */}
      <div
        style={{
          position: 'relative',
          height: '520px',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundImage: `url('https://picsum.photos/id/870/1920/1080')`, // ← thay bằng ảnh thật sau
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15,15,15,0.92) 35%, rgba(15,15,15,0.4) 75%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '60px',
            maxWidth: '580px',
            zIndex: 2,
          }}
        >
          <Title
            level={1}
            style={{
              color: '#fff',
              fontSize: '52px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Weather With You
          </Title>

          <Paragraph style={{ color: '#ddd', fontSize: '17.5px', lineHeight: 1.7 }}>
            Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.
          </Paragraph>

          <Space style={{ marginTop: '32px' }}>
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              style={{
                backgroundColor: '#00d4ff',
                border: 'none',
                height: 54,
                fontSize: '18px',
                padding: '0 36px',
                borderRadius: '9999px',
                fontWeight: 600,
              }}
            >
              Watch Now
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;