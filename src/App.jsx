import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Asmaulhusna from './pages/Asmaulhusna';
import Detailsurah from './pages/Detailsurah';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/Detailsurah/:surahNumber" element={<Detailsurah />} />
      <Route path="/Asmaulhusna" element={<Asmaulhusna />} />
    </Routes>
  );
};

export default App;
