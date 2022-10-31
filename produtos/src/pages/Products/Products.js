import './Products.css'

// Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

// Components
import ProductDetail from '../../components/ProductDetail'

const Product = () => {

  const { documents: products, loading } = useFetchDocuments('produtos')

  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div id='products'>
      <h2 className='title'>Produtos</h2>
      <span className='linha-laranja'>linh</span>
      <form onSubmit={handleSubmit} className='search-form'>
          <input 
           type="text"
           placeholder='Busque um produto específico...'
           onChange={(e) => setQuery(e.target.value)}
          />
          <button className='btn btn-search'>Pesquisar</button>
      </form>
      <div className="products-list">
        {loading && <p>Carregando...</p>}
        {products && products.length === 0 && (
          <div className='no-products'>
            <p>Não foram encontrados produtos...</p>
          </div>
        )}
        {products && products.map((product) => <ProductDetail key={product.id} product={product}/>)}
      </div>
    </div>
  );
};

export default Product;