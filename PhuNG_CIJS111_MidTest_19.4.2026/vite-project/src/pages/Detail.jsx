import { Navigate, useParams } from 'react-router-dom';
import AppHeader from '../components/layout/Header';
import VideoPlayer from '../components/detail/VideoPlayer';
import AnimeInfo from '../components/detail/AnimeInfo';
import PopularAnime from '../components/detail/PopularAnime';
import { animeData, popularAnime } from '../data/data';

const Detail = () => {
  const { id } = useParams();
  const anime = animeData.find((item) => item.id === id);

  if (!anime) {
    return <Navigate to="/" replace />;
  }

  const sidebarItems = popularAnime.filter((item) => item.id !== anime.id).slice(0, 6);

  return (
    <div className="app-shell">
      <AppHeader />
      <main className="page page-detail">
        <section className="detail-layout">
          <div className="detail-main">
            <VideoPlayer anime={anime} />
            <AnimeInfo anime={anime} />
          </div>

          <aside className="detail-sidebar">
            <PopularAnime items={sidebarItems} />
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Detail;
