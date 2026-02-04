import Header from '../components/Header';
import PostItem from '../components/PostItem';

function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '40px 10%' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Últimas do blog</h2>
        <PostItem 
          titulo="5 dicas para sua carreira profissional" 
          resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
        />
        <PostItem 
          titulo="5 dicas para sua carreira profissional" 
          resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
        />
        <PostItem 
          titulo="5 dicas para sua carreira profissional" 
          resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
        />
        <a href="#" style={{ color: '#2b508d', fontWeight: 'bold', textDecoration: 'none' }}>Ver tudo</a>
      </main>
    </div>
  );
}

export default Home;