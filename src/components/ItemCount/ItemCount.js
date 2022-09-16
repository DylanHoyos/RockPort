import { useState } from "react"
import './ItemCount.css'
const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const suma = () => {
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }



    return (

        <>
            {stock <= 0 ? <h3>no hay stock</h3> : <h3>{contador}</h3>}

            <button disabled={contador <= 1} onClick={resta} className="buttons"> Restar</button>
            <button disabled={contador >= stock} onClick={suma} className="buttons"> Sumar</button>
            <button disabled={stock <= 0} onClick={() => onAdd(contador)} className="buttons"> add</button>
        </>
    )
}

export default ItemCount