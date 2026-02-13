import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import React from 'react';

export default function Home() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/anuncios')
      .then(res => res.json())
      .then(data => setAnuncios(data))
      .catch(err => console.error("Erro ao buscar anúncios:", err));
  }, []);

  return (
    <div>
      <h1>Veículos Disponíveis</h1>
      <div className={styles.grid}>
        {anuncios.map(carro => (
          <div key={carro.id} className={styles.card}>
            <img src={carro.imagemUrl} alt={carro.titulo} className={styles.image} />
            <div className={styles.content}>
              <h3>{carro.titulo}</h3>
              <p className={styles.price}>R$ {carro.preco.toLocaleString('pt-BR')}</p>
              <p>{carro.ano} | {carro.quilometragem} km</p>
              <Link to={`/anuncio/${carro.id}`} className={styles.btnDetails}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}