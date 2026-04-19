import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="bg-[#111111] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-red-500">Anonime</h1>
          
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors">List anime</a>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <Input
            placeholder="Search anime or movie"
            prefix={<SearchOutlined className="text-gray-400" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1f1f1f] border-gray-700 text-white placeholder-gray-500 hover:border-red-500 focus:border-red-500"
            allowClear
          />
        </div>

        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-medium transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
}