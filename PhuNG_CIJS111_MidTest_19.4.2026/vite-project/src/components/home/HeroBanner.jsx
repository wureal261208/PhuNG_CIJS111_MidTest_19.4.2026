const HeroBanner = ({ anime }) => {
  return (
    <section className="hero-section">
      <div className="section-copy">
        <h2>Explore</h2>
        <p>What are you gonna watch today ?</p>
      </div>

      <article
        className="hero-banner"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(15, 23, 29, 0.72), rgba(15, 23, 29, 0.08)), url(${anime.coverImage})` }}
      >
        <div className="hero-banner__content">
          <h3>{anime.movieName}</h3>
          <p>{anime.description}</p>
        </div>
      </article>
    </section>
  );
};

export default HeroBanner;
