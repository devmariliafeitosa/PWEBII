import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">🚗 M.Autos</Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/cadastro">Anunciar Veículo</Link>
      </nav>
    </header>
  );
}