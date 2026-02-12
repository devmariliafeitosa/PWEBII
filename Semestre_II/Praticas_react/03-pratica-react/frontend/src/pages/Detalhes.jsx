import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detalhes.module.css';
import React from 'react'; 

export default function Detalhes() {
  const { id } = useParams(); 
  const [anuncio, setAnuncio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetch(`http://localhost:3000/anuncios/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnuncio(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar detalhes:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container">Carregando detalhes...</div>;
  if (!anuncio) return <div className="container">Anúncio não encontrado!</div>;

  return (
    <div className="container">
      <Link to="/" className={styles.btnVoltar}>← Voltar para a vitrine</Link>
      
      <div className={styles.detalhesWrapper}>
        <div className={styles.imagemSecao}>
          <img src={anuncio.imagemUrl} alt={anuncio.titulo} />
        </div>

        <div className={styles.infoSecao}>
          <h1>{anuncio.titulo}</h1>
          <p className={styles.preco}>R$ {anuncio.preco.toLocaleString('pt-BR')}</p>
          
          <div className={styles.specs}>
            <span><strong>Ano:</strong> {anuncio.ano}</span>
            <span><strong>KM:</strong> {anuncio.quilometragem.toLocaleString('pt-BR')} km</span>
          </div>

          <h3>Descrição</h3>
          <p className={styles.descricao}>{anuncio.descricao}</p>

          <div className={styles.cardVendedor}>
            <h4>Falar com o vendedor</h4>
            <p><strong>Nome:</strong> {anuncio.vendedor.nome}</p>
            <p><strong>Telefone:</strong> {anuncio.vendedor.telefone}</p>
            <p><strong>E-mail:</strong> {anuncio.vendedor.email}</p>
            <button className={styles.btnContato}>Tenho Interesse</button>
          </div>
        </div>
      </div>
    </div>
  );
}