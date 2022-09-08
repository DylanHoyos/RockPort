import { useState, useEffect } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import data from '../MockData'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting, stock }) => {
    const [autos, setAutos] = useState([]);
    const [validacion, setValidacion] = useState(0);

    useEffect(() => {
        traeProductos.then((response) => {
            setAutos(response)
        })

    }, [])

    const traeProductos = new Promise((res) => {
        setTimeout(() => {
            res(data)
        }, 2000);
    })





    return (

        <div>
            {/* <h1 className="greeting">{greeting}</h1> */}
            <ItemList catalogo={autos} />

            {validacion > stock ? (null) : <ItemCount stock={validacion} setStock={setValidacion} />}

        </div>
    )

}
export default ItemListContainer