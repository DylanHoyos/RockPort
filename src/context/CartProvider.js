import React, { useState } from 'react'
import { CartContext } from './CartContext'
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addProduct = (info, cantidad) => {

        if (isInCart(info.id)) {
            alert('ya existe este producto')

            setCart(cart.map(carro => {
                return carro.id === info.id ? { ...carro, cantidad: carro.cantidad + cantidad } : carro
            }))

        } else {
            setCart([...cart, { ...info, cantidad }])
        }
        console.log('cart:', [...cart, { ...info, cantidad }]);
        console.log("id:", info.id);
    }
    const clsCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const removeProduct = (id) => {
        setCart(cart.filter(car => car.id !== id))
    }

    const precioTotal = () => {
        return (cart.reduce((acu, actual) => acu + (actual.price * actual.cantidad), 0));

    }
    const totalAutos = () => {
        return cart.reduce((acu, actual) => acu + actual.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ addProduct, clsCart, isInCart, removeProduct, precioTotal, totalAutos, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider