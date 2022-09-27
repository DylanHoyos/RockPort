import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const { cart, removeProduct, precioTotal } = useContext(CartContext);
    console.log('cart', cart);
    return (
        <div >

            {cart.length === 0 ? (
                <>
                    No hay productos
                    <Link to={'/'} > Volver a comprar</Link>
                </>) : (
                <>
                    {cart.map((auto) => (
                        <div className='cart-container' key={auto.id}>
                            <img src={auto.img} />
                            <h3 className='item-cart-container'>{auto.titulo}</h3>
                            <p className='item-cart-container'> ${auto.precio}</p>
                            <p className='item-cart-container'> cantidad: {auto.cantidad}</p>
                            <button onClick={() => removeProduct(auto.id)}>delete</button>

                        </div>
                    )
                    )}
                    <p>total: ${precioTotal()}</p>
                </>
            )}

        </div>
    )
}

export default Cart