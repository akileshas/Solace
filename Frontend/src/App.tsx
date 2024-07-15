import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './components/form/SignUpform';

import Home from './pages/home/home';

import About from './pages/about/about';
import NotFound from './pages/not_found/not_found';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/signup" element={<SignUpForm />} />
          
          <Route path="/home" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
