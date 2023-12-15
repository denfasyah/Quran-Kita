import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Asmaulhusna from './pages/Asmaulhusna';
import Kumpulandoa from './pages/Kumpulandoa';
import Detailsurah from './pages/Detailsurah';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/Detailsurah/:surahNumber" element={<Detailsurah />} />
      <Route path="/Asmaulhusna" element={<Asmaulhusna />} />
      <Route path="/Kumpulandoa" element={<Kumpulandoa />} />
    </Routes>
  );
};

export default App;
