import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AnimeCard from '../components/anime/AnimeCard';

const animeList = [
  { id: 1, title: "One Piece", episode: "Episode 1018", image: "https://picsum.photos/id/1015/300/400" },
  { id: 2, title: "Boruto: Naruto Next Generations", episode: "Episode 250", image: "https://picsum.photos/id/201/300/400" },
  { id: 3, title: "Spy x Family", episode: "Episode 07", image: "https://picsum.photos/id/237/300/400" },
  { id: 4, title: "Shingeki no Kyojin", episode: "Episode 28", image: "https://picsum.photos/id/870/300/400" },
  { id: 5, title: "Captain Tsubasa", episode: "Episode 28", image: "https://picsum.photos/id/201/300/400" },
  { id: 6, title: "Aoashi", episode: "Episode 28", image: "https://picsum.photos/id/133/300/400" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnime = animeList.filter(anime =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">New Release</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard
              key={anime.id}
              title={anime.title}
              episode={anime.episode}
              image={anime.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}