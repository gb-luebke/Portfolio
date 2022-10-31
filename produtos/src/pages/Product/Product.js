import './Product.css'

// Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'

// Context
import { CartContext } from '../../context/CartContext'

const Product = () => {

    const { dispatch } = useContext(CartContext)

    const { id } = useParams()
    const { document: product } = useFetchDocument('produtos', id)

    return (
        <div id='product'>
            {product && (
            <>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name}/>
                <p className='price'>Preço: R${product.price},00</p>
                <div className='description'>
                    <p className='description-title'>Descrição do produto: </p>
                    <p className='description-p'>{product.body}</p>
                </div>
                <button 
                 className='btn btn-cart' 
                 onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.productId , product })}
                >
                    Adicionar ao carrinho
                </button>
                <Link to='/products' className='btn-voltar' >
                    Voltar
                </Link>
            </>
            )}
        </div>
    )
}

export default Product