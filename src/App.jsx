import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import './css/style.css';



// Import pages

import Home from './pages/Home';
import Resultado from './pages/Result';



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to='/home' />} />

        <Route
          path="/home"
          element={
            <Home />
          }
        />

        <Route
          path="/resultado"
          element={
            <Resultado />
          }
        />

      </Routes>
    </>
  );
}

export default App;
