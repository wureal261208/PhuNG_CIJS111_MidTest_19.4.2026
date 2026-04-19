const AnimeInfo = ({ anime }) => {
  const infoList = [
    { label: 'Type', value: anime.type },
    { label: 'Status', value: anime.status },
    { label: 'Studios', value: anime.studio },
    { label: 'Duration', value: anime.duration },
    { label: 'Genres', value: anime.genres.join(', ') },
  ];

  return (
    <section className="info-section">
      <div className="info-top">
        <div className="info-poster">
          <img src={anime.image} alt={anime.movieName} />
        </div>

        <dl className="info-list">
          {infoList.map((item) => (
            <div key={item.label} className="info-row">
              <dt>{item.label} :</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="synopsis-block">
        <h2>Synopsis :</h2>
        <p>{anime.synopsis}</p>
      </div>
    </section>
  );
};

export default AnimeInfo;
