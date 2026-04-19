import { CaretRightFilled } from '@ant-design/icons';

const VideoPlayer = ({ anime }) => {
  return (
    <section className="player-section">
      <h1>{anime.movieName} - {anime.episode}</h1>
      <div className="player-frame" role="img" aria-label={`${anime.movieName} player placeholder`}>
        <button type="button" className="player-button" aria-label="Play anime trailer">
          <CaretRightFilled />
        </button>
      </div>
    </section>
  );
};

export default VideoPlayer;
