import React, { useState } from 'react'
import { CartContext } from './CartContext'
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProduct = (info, cantidad) => {
        if (isInCart(info.id)) {
            alert('ya existe este producto')

        } else {
            setCart([...cart, { ...info, cantidad }])
        }
        console.log('cart:', [...cart, { ...info, cantidad }]);
    }
    const clsCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeProduct = (id) => {
        setCart(cart.filter(car => car.id !== id))
    }

    return (
        <CartContext.Provider value={{ addProduct, clsCart, isInCart, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider