import { createContext, useReducer } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children, value }) => {
    
    const initialShoppingCart = {
        shoppingCart: [],
        totalPrice: 0,
        totalQtd: 0,
    }

    const cartReducer = (state, action) => {
        const { shoppingCart, totalPrice, totalQtd } = state;

        let product
        let index
        let updatedPrice
        let updatedQtd

        switch (action.type) {
            case "ADD_TO_CART":
                const check = shoppingCart.find(product => product.productId === action.id)
                if(check) {
                    alert('Product is already in your cart')
                    return state
                } else {
                    product = action.product
                    product['qtd'] = 1
                    product['totalProductPrice'] = product.price * product.qtd
                    updatedQtd = totalQtd + 1
                    updatedPrice = totalPrice + product.price
                    return {
                        shoppingCart: [product, ...shoppingCart],
                        totalPrice: updatedPrice,
                        totalQtd: updatedQtd
                    }
                }
            case 'INC':
                console.log(`INC executado`)
                product = action.cart
                product.qtd = product.qtd + 1/2
                product.totalProductPrice = product.qtd * product.price
                updatedQtd = totalQtd + 1
                updatedPrice = totalPrice + product.price
                index = shoppingCart.findIndex(cart => cart.productId === action.id)
                shoppingCart[index] = product
                console.log(`INC executado. Quantidade: ${product.qtd}`)
                return {
                    shoppingCart: [...shoppingCart],
                    totalPrice: updatedPrice,
                    totalQtd: updatedQtd
                }

            case 'DEC':
                product = action.cart
                if(product.qtd > 1) {
                    product.qtd = product.qtd - 1/2
                    product.totalProductPrice = product.qtd * product.price
                    updatedPrice = totalPrice - product.price
                    updatedQtd = totalQtd - 1
                    index = shoppingCart.findIndex(cart => cart.productId === action.id)
                    shoppingCart[index] = product
                    return {
                        shoppingCart: [...shoppingCart],
                        totalPrice: updatedPrice,
                        totalQtd: updatedQtd
                    }
                } else {
                    return state
                }

            case 'DELETE':
                const filtered = shoppingCart.filter((product) => product.productId !== action.id)
                product = action.cart
                updatedQtd = totalQtd - product.qtd
                updatedPrice = totalPrice - product.qtd * product.price
                return {
                    shoppingCart: [...filtered],
                    totalPrice: updatedPrice,
                    totalQtd: updatedQtd
                }

            case 'EMPTY':
                return {
                    shoppingCart: [], totalPrice: 0, totalQtd: 0
                }

            default: 
                console.log('Reducer type não definido!')
                return state
            
        }
    }

    const [cart, dispatch] = useReducer(cartReducer, initialShoppingCart)
    
    return (
        <CartContext.Provider value={{...cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}