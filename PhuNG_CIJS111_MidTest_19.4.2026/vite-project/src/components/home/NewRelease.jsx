import NewReleaseCard from './NewReleaseCard';

const NewRelease = ({ animes }) => {
  return (
    <section className="release-section">
      <h2>New Release</h2>
      <div className="release-grid">
        {animes.map((anime) => (
          <NewReleaseCard key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
};

export default NewRelease;
