import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Footer from './components/footer';
import Store from './pages/Store';
import Coaches from './pages/Coaches';
import Supplemenets from './pages/Supplements';
import Clothes from './pages/Clothes';
import Contactus from './pages/Contactus';
import Subplans from './pages/Subplans';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(true);
  }

  const handleAppClick = (e) => {
    //prevents closing when clicking inside navbar
    if (!e.target.closest('.navbar')) {
      setOpenMenu(false);
    }
  };



  return (
    <div className='main'>
      <div className="App" onClick={handleAppClick}>
        <BrowserRouter>
          <Navbar toggleMenu={toggleMenu} openMenu={openMenu}></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Coaches' element={<Coaches />}></Route>
            <Route path='/Store' element={<Store />}></Route>
            <Route path='/Supplements' element={<Supplemenets />}></Route>
            <Route path='/Clothes' element={<Clothes />}></Route>
            <Route path='/contact-us' element={<Contactus />}></Route>
            <Route path='/subplans' element={<Subplans />}></Route>
            <Route path='*' element={<Home />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;



