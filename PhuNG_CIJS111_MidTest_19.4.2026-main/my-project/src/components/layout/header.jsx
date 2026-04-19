import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Ananime</Link>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/browse" className="nav-link">Browse</Link>
          <Link to="/list" className="nav-link">My List</Link>
        </nav>

        <div className="search-container">
          <Input
            placeholder="Search anime or movie"
            prefix={<SearchOutlined />}
            className="search-input"
            allowClear
          />
        </div>
      </div>
    </header>
  );
};

export default Header;