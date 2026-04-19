import { Link } from 'react-router-dom';

const PopularAnime = ({ items }) => {
  return (
    <section className="popular-section">
      <h2>Popular Anime</h2>
      <div className="popular-grid">
        {items.map((item) => (
          <Link key={item.id} to={`/detail/${item.id}`} className="popular-card">
            <img src={item.image} alt={item.movieName} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularAnime;
