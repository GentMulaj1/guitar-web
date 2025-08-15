import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Footer from './component/shared/Footer/Footer';
import Guitars from './pages/Guitars/Guitars';
import GuitarDetail from './pages/GuitarDetail/GuitarDetail';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitars/:name/:id" element={<Guitars />} />
          <Route path="/guitar/:brandName/:brandId/:modelId" element={<GuitarDetail />} />
        </Routes>


    </div>
  );
}

export default App;
