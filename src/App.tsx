import './sass/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/HeaderInicio/Header';
import { SanRafael } from 'components/San Rafael/SanRafael';
import { Circuitos } from 'components/Circuitos/Circuitos';
import { Footer } from 'components/Footer/Footer';
import { HeaderPosada } from 'components/HeaderPosada/HeaderPosada';
import { Banner } from 'components/Banner/Banner';
import { Ambientes } from 'components/Ambientes/Ambientes';
import { Ubicacion } from 'components/Ubicacion/Ubicacion';
import bannerPosada from 'img/posada/bannerPosada.png'
import bannerContacto from 'img/posada/bannerContacto.png'
import { Contacto } from 'components/Contacto/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Header />
            <SanRafael />
            <Circuitos />
            <Footer />
          </>
        } />

        <Route path='/posada-don-felipe' element={
          <>
            <Navbar />
            <HeaderPosada />
            <Banner image={bannerPosada} idText='posada.banner.text' />
            <Ambientes />
            <Ubicacion />
            <Footer />
          </>
        } />
        <Route path='/contacto' element={
          <>
            <Navbar />
            <Banner image={bannerContacto} idText='contacto.banner.text' />
            <Contacto />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
