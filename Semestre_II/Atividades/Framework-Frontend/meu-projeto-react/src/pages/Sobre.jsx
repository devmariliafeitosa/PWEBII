import Header from '../components/Header';

function Sobre() {
  return (
    <div>
      <Header />
      <main style={{ padding: '40px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#2b508d' }}>Sobre este Projeto</h2>
        <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#444' }}>
          Este site foi desenvolvido como parte de uma atividade prática de ADS 
          para aprender a criar componentes e rotas no React.
        </p>
      </main>
    </div>
  );
}

export default Sobre;