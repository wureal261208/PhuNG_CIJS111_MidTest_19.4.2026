import React from 'react';
import { Layout, Menu, Input } from 'antd';
import { VideoCameraOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: '#0f0f0f',
        padding: '0 40px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #222',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <VideoCameraOutlined style={{ fontSize: '36px', color: '#00d4ff' }} />
        <h1 style={{ color: '#fff', margin: 0, fontSize: '28px', fontWeight: 700 }}>
          Anonime
        </h1>
      </div>

      <Menu
        mode="horizontal"
        theme="dark"
        style={{
          flex: 1,
          marginLeft: '60px',
          background: 'transparent',
          borderBottom: 'none',
        }}
        items={[
          { key: 'home', icon: <HomeOutlined />, label: 'Home' },
          { key: 'list', label: 'List anime' },
        ]}
        defaultSelectedKeys={['home']}
      />

      <Input
        prefix={<SearchOutlined style={{ color: '#aaa' }} />}
        placeholder="Search anime or movie"
        style={{
          width: 340,
          backgroundColor: '#1f1f1f',
          borderColor: '#333',
          color: '#fff',
          borderRadius: '9999px',
          height: '42px',
        }}
      />
    </Header>
  );
};

export default AppHeader;