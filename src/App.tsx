import './sass/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import { SanRafael } from 'components/San Rafael/SanRafael';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Header />
            <SanRafael />
          </>
        } />

        <Route path='/posada-don-felipe' element={
          <>
            La posada
          </>
        } />
        <Route path='/contacto' element={
          <>
            Contacto
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
