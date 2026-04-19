import './animeCard.css';

const AnimeCard = ({ image, title, episode}) => {
  return (
    <div className="anime-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="episode-badge">Episode {episode}</div>
      </div>
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
};

export default AnimeCard;