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
          borderRadius: '28px',
          overflow: 'hidden',
          backgroundImage: `url('https://images3.alphacoders.com/117/thumb-1920-1178780.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 32px 80px rgba(0, 0, 0, 0.32)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(110deg, rgba(7, 12, 22, 0.94) 28%, rgba(7, 12, 22, 0.36) 68%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '72px',
            left: '60px',
            maxWidth: '600px',
            zIndex: 2,
          }}
        >
          <Title
            level={1}
            style={{
              color: '#ffffff',
              fontSize: '56px',
              lineHeight: 1.05,
              marginBottom: '18px',
            }}
          >
            Weather With You
          </Title>

          <Paragraph style={{ color: '#cbd5e1', fontSize: '17.5px', lineHeight: 1.75, maxWidth: '520px' }}>
            Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.
          </Paragraph>

          <Space style={{ marginTop: '30px' }}>
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              style={{
                backgroundColor: '#22d3ee',
                border: 'none',
                height: 54,
                fontSize: '18px',
                padding: '0 38px',
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