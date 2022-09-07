import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ greeting, stock }) => {

    const [validacion, setValidacion] = useState(0);

    return (

        <div>
            <h1 className="greeting">{greeting}</h1>

            {validacion > stock ? (null) : <ItemCount stock={validacion} setStock={setValidacion} />}

        </div>
    )
}

export default ItemListContainer