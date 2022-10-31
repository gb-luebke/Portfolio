import './Cart.css'

// Images
import EmptyShoppingCart from '../../images/EmptyShoppingCart.png.png'

// React-Icons
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import { IoTrashOutline } from 'react-icons/io5'

// Hooks
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Context
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const { shoppingCart, dispatch, totalPrice, totalQtd } = useContext(CartContext)

    useEffect(() => {

        if(shoppingCart.length === 0 && totalPrice !== 0) {
            dispatch({ type: 'EMPTY' })
            alert('Carrinho resetado')
        }

    },[shoppingCart, dispatch, totalPrice])

    return (
        <div id='shopping-cart'>
            <div className='cart-container'>
                {shoppingCart.length === 0 && (
                <div className='no-products'>
                    <img src={EmptyShoppingCart} alt="Empty Shopping Cart" />
                    <p>O seu carrinho está vazio!</p>
                    <Link to='/products' className='btn no-products-btn'>Ver produtos</Link>
                </div>
                )}
                {shoppingCart && shoppingCart.map((cart) => (
                    <div className='cart-item' key={cart.productId}>
                        <div className='cart-img'>
                            <img src={cart.image} alt={cart.name}/>
                        </div>
                        <div className='cart-name'>
                            <h2>{cart.name}</h2>
                        </div>
                        <div className='product-price'>
                            <p>R$ {cart.price},00</p>
                        </div>
                        <div className='cart-btn'>
                            <button className='btn-add' onClick={() => dispatch({ type: 'INC', id: cart.productId, cart })}>
                                <IoIosAddCircleOutline/>
                            </button>
                        </div>
                        <div className='quantity'>
                            <p>{cart.qtd}</p>
                        </div>
                        <div className='cart-btn'>
                            <button className='btn-minus' onClick={() => dispatch({ type: 'DEC', id: cart.productId, cart })}>
                                <IoIosRemoveCircleOutline/>
                            </button>
                        </div>
                        <div className='total-price'>
                            <p>R$ {cart.totalProductPrice},00</p>
                        </div>
                        <button className='btn-remove' onClick={() => dispatch({ type: 'DELETE', id: cart.productId, cart })}>
                            <IoTrashOutline/>
                        </button>
                    </div>
                ))}
                {shoppingCart.length > 0 && (
                <div className='cart-summary'>
                    <h3>Sumário do carrinho</h3>
                    <p>Total:</p>
                    <span>R$ {totalPrice},00</span>
                    <p>Quantidade Total:</p>
                    <span>{totalQtd}</span>
                    <button className='btn no-products-btn'>
                        Finalizar Compra
                    </button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Cart