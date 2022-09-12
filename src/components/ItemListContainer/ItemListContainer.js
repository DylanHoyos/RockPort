import { useState, useEffect } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import data from '../MockData'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ }) => {
    const [autos, setAutos] = useState([]);


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

    const onAdd = (cantidad) => {
        console.log(`se ejecuto OnAdd, compro ${cantidad} producto`);
    }



    return (

        <div>
            {/* <h1 className="greeting">{greeting}</h1> */}
            <ItemList catalogo={autos} />

            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </div>
    )

}
export default ItemListContainer