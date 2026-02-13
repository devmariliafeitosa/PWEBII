import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/anuncio/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;