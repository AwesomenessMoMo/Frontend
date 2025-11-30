import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Footer from './components/footer';
import Store from './pages/Store';
import Coaches from './pages/Coaches';
import Supplemenets from './pages/Supplements';
import Clothes from './pages/Clothes';
import Contactus from './pages/Contactus';
import Subplans from './pages/Subplans';
import TrainingProgram from './pages/TrainingPrograms';
import ScrollToTop from "./components/ScrollToTop";
import FAQ from './pages/faq';
import Schedule from './pages/CoachesSchedule';
import Checkout from './pages/Checkout';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(true);
  };

  const handleAppClick = (e) => {
    if (!e.target.closest('.navbar')) {
      setOpenMenu(false);
    }
  };

  return (
    <div className='main'>
      <div className="App" onClick={handleAppClick}>

        <ScrollToTop />
        <Navbar toggleMenu={toggleMenu} openMenu={openMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coaches' element={<Coaches />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/Supplements' element={<Supplemenets />} />
          <Route path='/Clothes' element={<Clothes />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/subplans' element={<Subplans />} />
          <Route path='/training-programs' element={<TrainingProgram />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/checkout" element={<> <Checkout /> </>} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
