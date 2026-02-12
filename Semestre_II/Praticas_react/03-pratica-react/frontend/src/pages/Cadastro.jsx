import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';
import React from 'react';

export default function Cadastro() {
  const navigate = useNavigate(); 
  
  const [veiculo, setVeiculo] = useState({
    titulo: '',
    descricao: '',
    preco: '',
    ano: '',
    quilometragem: '',
    imagemUrl: '',
    vendedor: {
      nome: '',
      telefone: '',
      email: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!veiculo.titulo || !veiculo.vendedor.nome || !veiculo.preco) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/anuncios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...veiculo,
          preco: Number(veiculo.preco),
          ano: Number(veiculo.ano),
          quilometragem: Number(veiculo.quilometragem)
        })
      });

      if (response.ok) {
        alert("Anúncio cadastrado com sucesso!");
        navigate('/'); 
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div className="container">
      <h1 className={styles.tituloPagina}>Cadastrar Novo Anúncio</h1>
      <div className={styles.formCard}>
        <form onSubmit={handleSubmit}>
          <section className={styles.secaoForm}>
            <h3>Informações do Veículo</h3>
            <input 
              type="text" placeholder="Título do Anúncio (ex: Civic G10)" 
              onChange={e => setVeiculo({...veiculo, titulo: e.target.value})} 
            />
            <div className={styles.row}>
              <input type="number" placeholder="Preço" onChange={e => setVeiculo({...veiculo, preco: e.target.value})} />
              <input type="number" placeholder="Ano" onChange={e => setVeiculo({...veiculo, ano: e.target.value})} />
            </div>
            <input type="number" placeholder="Quilometragem" onChange={e => setVeiculo({...veiculo, quilometragem: e.target.value})} />
            <input type="text" placeholder="URL da Imagem Pública" onChange={e => setVeiculo({...veiculo, imagemUrl: e.target.value})} />
            <textarea placeholder="Descrição detalhada" onChange={e => setVeiculo({...veiculo, descricao: e.target.value})}></textarea>
          </section>

          <section className={styles.secaoForm}>
            <h3>Dados de Contato</h3>
            <input 
              type="text" placeholder="Nome do Vendedor" 
              onChange={e => setVeiculo({...veiculo, vendedor: {...veiculo.vendedor, nome: e.target.value}})} 
            />
            <input 
              type="text" placeholder="Telefone/WhatsApp" 
              onChange={e => setVeiculo({...veiculo, vendedor: {...veiculo.vendedor, telefone: e.target.value}})} 
            />
            <input 
              type="email" placeholder="E-mail" 
              onChange={e => setVeiculo({...veiculo, vendedor: {...veiculo.vendedor, email: e.target.value}})} 
            />
          </section>

          <button type="submit" className={styles.submitBtn}>Publicar Anúncio</button>
        </form>
      </div>
    </div>
  );
}