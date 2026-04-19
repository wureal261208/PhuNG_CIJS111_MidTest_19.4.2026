import { PlayCircleOutlined } from '@ant-design/icons';

export default function AnimeCard({ title, episode, image }) {
  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[380px] object-cover"
      />
      
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent h-40" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-red-500 text-sm font-medium">{episode}</p>
        <p className="font-semibold text-lg leading-tight mt-1 group-hover:text-red-400 transition-colors line-clamp-2">
          {title}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <PlayCircleOutlined className="text-6xl text-white drop-shadow-2xl" />
      </div>
    </div>
  );
}