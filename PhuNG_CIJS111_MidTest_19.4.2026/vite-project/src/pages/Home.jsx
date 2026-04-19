import AppHeader from '../components/layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import NewRelease from '../components/home/NewRelease';
import { animeData, featuredAnime } from '../data/data';

const Home = () => {
  const releases = animeData.filter((anime) => anime.id !== featuredAnime.id);

  return (
    <div className="app-shell">
      <AppHeader />
      <main className="page page-home">
        <HeroBanner anime={featuredAnime} />
        <NewRelease animes={releases} />
      </main>
    </div>
  );
};

export default Home;
