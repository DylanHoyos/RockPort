import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import './Cart.css';


const Cart = () => {
    const { cart, removeProduct, precioTotal } = useContext(CartContext);
    console.log('Acart', cart);

    const order = {
        buyer: {
            name: 'Carlos',
            email: 'carlosmar@gmail.com',
            phone: '152535253',
            adress: 'dasdas 3232'
        },
        items: cart.map(prod => ({ id: prod.id, title: prod.title, price: prod.price, cantidad: prod.cantidad })),
        total: precioTotal(),
    }

    const terminarCompra = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'ordenes-de-compra');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id));

    }

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
                        <p> total: ${precioTotal()}</p>
                        <button onClick={terminarCompra}>Terminar Compra</button>
                    </>
                )}

        </div>
    )
}

export default Cart