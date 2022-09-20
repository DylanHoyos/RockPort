import { Link } from 'react-router-dom'
import './ItemCount.css'
const ItemCount = ({ stock, onAdd, contador, setContador }) => {


    const suma = () => {
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }



    return (

        <div className='conteiner-count'>
            <div className='conteiner-count-number'>
                {stock <= 0 ? <h3>no hay stock</h3> : <h3>{contador}</h3>}
            </div>
            <div className='conteiner-count-buttons'>
                <button disabled={contador <= 1} onClick={resta} className="buttons">-</button>
                <button disabled={contador >= stock} onClick={suma} className="buttons"> +</button>

            </div>
            <div className=' conteiner-count-link' >

                <Link to={'/cart'} disabled={stock <= 0} onClick={() => onAdd(contador)} className='link button-link' > <p className='link-p'>Agregar al carrito </p></Link>
            </div>




        </div>
    )
}

export default ItemCount