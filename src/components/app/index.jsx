/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

// eslint-disable-next-line import/no-named-as-default
import Home from './Home';
import ProfilPage from './ProfilPage';
import CreateActivity from './CreateActivity';
import DetailledActivity from './DetailledActivity';
import Contact from './Contact';
import About from './About';
import NotFound from './Errors';

function App() {
  const userId = localStorage.getItem('userId');
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={userId ? <ProfilPage /> : <Navigate to="/" replace />} />
        <Route path="/activity" element={<CreateActivity />} />
        <Route path="/activity/:id" element={userId ? <DetailledActivity /> : <Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
