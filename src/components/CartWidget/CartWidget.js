import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import logoc from './logoc.png'
import './cartwidget.css'

const CartWidget = () => {
    const { cart, totalAutos } = useContext(CartContext);
    return (
        <div className='nav-logo-container'>
            <img src={logoc} className='nav-logo-cart' />  {cart.length === 0 ? "" : <h4 className='nav-logo-quantity'> {totalAutos()}</h4>}

        </div>
    )
}

export default CartWidget