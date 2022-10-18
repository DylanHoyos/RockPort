import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import './Cart.css';


const Cart = () => {
    const { cart, removeProduct, precioTotal } = useContext(CartContext);
    console.log('Acart', cart);

    const [order, setOrder] = useState({
        buyer: {
            name: '',
            email: '',
            phone: 0,
            adress: ''
        },
        items: cart.map(prod => ({ id: prod.id, title: prod.title, price: prod.price, cantidad: prod.cantidad })),
        total: precioTotal(),
    });

    const terminarCompra = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'ordenes-de-compra');
        addDoc(ordersCollection, order)
            .then(({ id }) => alert(`su codigo es de seguimiento es: " ${id}"`));

    }
    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            },
        });

    };

    return (
        <div >

            {cart.length === 0
                ? (
                    <>

                        <Link to={'/'} className='volver' > Haga click para volver a comprar</Link>
                    </>)
                : (
                    <div className='cart-main'>
                        {cart.map(auto => (
                            <div className='cart-container' key={auto.id} >

                                <img src={auto.image} />
                                <h3 className='item-cart-container'>{auto.title}</h3>
                                <p className='item-cart-container'> Precio: ${auto.price}</p>
                                <p className='item-cart-container'> Cantidad: {auto.cantidad}</p>
                                <p className='item-cart-container'> Id: {auto.id}</p>
                                <button onClick={() => removeProduct(auto.id)} className='item-cart-button-delete'>Eliminar</button>

                            </div>
                        )

                        )}
                        <h1 className='formu-section-title'>Complete el formulario para terminar la compra</h1>
                        <form className='formu'>
                            <div className='formu-section'>
                                <label className='formu-section-title'>Nombre</label>
                                <input className='formu-section-input' name='name' type='text' value={order.buyer.name} onChange={handleInputChange} />
                            </div>
                            <div className='formu-section'>
                                <label className='formu-section-title'>Email</label>
                                <input className='formu-section-input' name='email' type='email' value={order.buyer.email} onChange={handleInputChange} />
                            </div>
                            <div className='formu-section'>
                                <label className='formu-section-title'>Numero telefonico</label>
                                <input className='formu-section-input' name='phone' type='number' value={order.buyer.phone} onChange={handleInputChange} />
                            </div>
                            <div className='formu-section'>
                                <label className='formu-section-title'>Direccion</label>
                                <input className='formu-section-input' name='adress' type='text' value={order.buyer.adress} onChange={handleInputChange} />
                            </div>
                        </form>
                        <p className='item-cart-container-total'> Total: ${precioTotal()}</p>
                        <button onClick={terminarCompra} className='terminarcompra'>Terminar Compra</button>
                    </div>
                )}

        </div>
    )
}

export default Cart