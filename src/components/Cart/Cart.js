import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const { cart, removeProduct, precioTotal } = useContext(CartContext);
    console.log('Acart', cart);
    return (
        <div >

            {cart.length === 0
                ? (
                    <>
                        No hay productos
                        <Link to={'/'} > Volver a comprar</Link>
                    </>)
                : (
                    <>
                        {cart.map(auto => (
                            <div className='cart-container' key={auto.id} >

                                <img src={auto.image} />
                                <h3 className='item-cart-container'>{auto.title}</h3>
                                <p className='item-cart-container'> ${auto.price}</p>
                                <p className='item-cart-container'> cantidad: {auto.cantidad}</p>
                                <p className='item-cart-container'> id: {auto.id}</p>
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