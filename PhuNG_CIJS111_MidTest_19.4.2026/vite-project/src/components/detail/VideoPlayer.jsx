import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          backgroundColor: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '24px',
          aspectRatio: '16 / 9',
        }}
      >
        <video
          controls
          autoPlay={false}
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button overlay nếu muốn (có thể bỏ nếu dùng controls) */}
        {!videoUrl && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '80px',
              color: '#00d4ff',
              opacity: 0.8,
            }}
          >
            <PlayCircleOutlined />
          </div>
        )}
      </div>

      <Title level={2} style={{ color: '#fff', marginBottom: '8px' }}>
        {title}
      </Title>
    </div>
  );
};

export default VideoPlayer;