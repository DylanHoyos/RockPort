import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import logoc from './logoc.png'

const CartWidget = () => {
    const { cart, totalAutos } = useContext(CartContext);
    return (
        <>
            <img src={logoc} className='nav-logo' />  <h4>{cart.length === 0 ? "" : totalAutos()}</h4>

        </>
    )
}

export default CartWidget