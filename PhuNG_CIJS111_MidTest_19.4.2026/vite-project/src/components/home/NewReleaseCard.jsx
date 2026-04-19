import { Link } from 'react-router-dom';

const NewReleaseCard = ({ anime }) => {
  return (
    <Link to={`/detail/${anime.id}`} className="release-card">
      <div className="release-card__poster">
        <img src={anime.image} alt={anime.movieName} />
        <span>{anime.episode}</span>
      </div>
      <h3>{anime.movieName}</h3>
    </Link>
  );
};

export default NewReleaseCard;
