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
          <Route path="/guitars" element={<Guitars />} />
          <Route path="/guitar" element={<GuitarDetail />} />

        

        </Routes>
      <Footer />


    </div>
  );
}

export default App;
