import React from 'react';
import { Link } from 'react-router-dom'; // Importante para as rotas funcionarem
import './Header.css';
import fotoPerfil from '../assets/perfil.png';

function Header() {
  return (
    <header className="header-container">
      <nav className="nav-menu">
        {/* Usamos Link to="/" para ir para a Home e Link to="/sobre" para a página Sobre */}
        <Link to="/">Blog</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="#">Descrição</Link>
      </nav>
      
      <div className="profile-section">
        <img src={fotoPerfil} alt="Foto de Perfil" className="profile-img" />
        <div className="profile-text">
          <h1>Marília da Silva Feitosa</h1>
          <p>
            Nascida no dia 11 de outubro de 2004, na cidade de Tauá Ceará, 
            já morei em São Paulo por 4 anos, hoje em dia faço ADS.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;