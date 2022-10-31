import './ProductDetail.css'
import { Link } from 'react-router-dom'

const ProductDetail = ({ product }) => {
    return (
        <div id='product-detail'>
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>R${product.price},00</p>
            <Link to={`/products/${product.id}`} className='btn-details'>
                Detalhes
            </Link>
        </div>
        
     
    )
}

export default ProductDetail