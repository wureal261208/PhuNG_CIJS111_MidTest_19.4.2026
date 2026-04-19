import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/list-anime', label: 'List anime' },
];

const AppHeader = () => {
  return (
    <header className="site-header">
      <div className="brand">Anonime</div>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <label className="search-box" aria-label="Search anime or movie">
        <SearchOutlined className="search-box__icon" />
        <input type="text" placeholder="Search anime or movie" />
      </label>
    </header>
  );
};

export default AppHeader;
