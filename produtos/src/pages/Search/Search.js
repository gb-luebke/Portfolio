import './Search.css'

// Images
import EmojiDesapontado from '../../images/EmojiDesapontado.png'

// Hooks 
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

// Components
import ProductDetail from '../../components/ProductDetail'

const Search = () => {

    const query = useQuery()
    const search = query.get('q')

    const { documents: products } = useFetchDocuments('produtos', search)

    return (
        <div id='search'>
            <h1>Resultados encontrados para: {search}</h1>
            <div className='products-list'>
                {products && products.length === 0 && (
                    <div className='no-results'>
                        <p>Não foram encontrados produtos a partir de sua busca...</p>
                        <img src={EmojiDesapontado} alt="no-results" />
                        <Link to='/products' className='btn btn-register'>
                            Voltar
                        </Link>
                    </div>
                )}
                {products && products.map((product) => <ProductDetail key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default Search