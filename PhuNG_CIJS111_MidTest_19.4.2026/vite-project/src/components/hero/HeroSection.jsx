import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

export default function HeroSection() {
  return (
    <div className="relative h-[520px] bg-gradient-to-r from-black/90 via-black/50 to-transparent overflow-hidden">
      <img
        src="https://picsum.photos/id/1015/1920/1080"
        alt="Weather With You"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Weather With You
          </h2>
          <p className="text-gray-300 text-lg mb-8 line-clamp-3">
            Corrupt politicians, feuded nationalists, and other warmongering forces 
            constantly jeopardized the thin veneer of peace between neighboring countries...
          </p>
          
          <Button 
            type="primary" 
            size="large" 
            icon={<PlayCircleOutlined />}
            className="bg-red-600 hover:bg-red-700 border-none h-12 px-8 text-lg font-medium"
          >
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
}