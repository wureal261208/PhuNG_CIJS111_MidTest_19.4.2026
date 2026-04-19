import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-anime" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
