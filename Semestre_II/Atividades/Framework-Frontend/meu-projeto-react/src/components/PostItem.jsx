function PostItem({ titulo, resumo }) {
  return (
    <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      <h3 style={{ color: '#2b508d', marginBottom: '5px' }}>{titulo}</h3>
      <p style={{ color: '#666', fontStyle: 'italic', fontSize: '0.9rem' }}>{resumo}</p>
    </div>
  );
}
export default PostItem;