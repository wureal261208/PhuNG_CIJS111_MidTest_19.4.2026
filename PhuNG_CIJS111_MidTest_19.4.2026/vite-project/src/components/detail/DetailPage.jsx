// pages/Detail.jsx
import React from 'react';
import { Layout, Row, Col, Typography, Button, Space } from 'antd';
import { PlayCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import AppHeader from '../components/layout/Header';
import VideoPlayer from '../components/detail/VideoPlayer';
import AnimeInfo from '../components/detail/AnimeInfo';
import PopularAnime from '../components/detail/PopularAnime';

const { Title, Paragraph } = Typography;

const Detail = () => {
  const navigate = useNavigate();

  // Dữ liệu mẫu (bạn sẽ thay bằng API sau)
  const anime = {
    id: 1,
    title: "One Piece - Episode 1018",
    image: "https://picsum.photos/id/1015/300/420",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // thay bằng link thật sau
    type: "TV",
    status: "Ongoing",
    studio: "Toei Animation",
    duration: "24 Min.",
    genres: "Action, Adventure, Fantasy",
    synopsis: "Gol D. Roger was known as the \"Pirate King.\" The strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#0f0f0f' }}>
      <AppHeader />

      <Layout.Content style={{ padding: '30px 40px 80px' }}>
        {/* Nút quay lại */}
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: '20px', color: '#fff', borderColor: '#444' }}
        >
          Back
        </Button>

        <Row gutter={[40, 40]}>
          {/* Left Column - Video + Info */}
          <Col xs={24} lg={16}>
            <VideoPlayer videoUrl={anime.videoUrl} title={anime.title} />

            <AnimeInfo anime={anime} />
          </Col>

          {/* Right Column - Popular Anime */}
          <Col xs={24} lg={8}>
            <PopularAnime />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Detail;