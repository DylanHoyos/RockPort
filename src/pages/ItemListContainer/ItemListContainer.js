import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from "../../components/ItemCount/ItemCount"
import data from '../../components/MockData'
import ItemList from '../../components/ItemList/ItemList'


const ItemListContainer = () => {
    const [autos, setAutos] = useState([]);
    const { catID } = useParams();

    useEffect(() => {
        const traeProductos = new Promise((res) => {
            setTimeout(() => {
                res(data)
            }, 2000);
        })

        if (catID) {
            traeProductos.then(res => setAutos(res.filter(tipo => tipo.categoria === catID)))

        } else {
            traeProductos.then((response) => {
                setAutos(response)
            })
        }


    }, [catID])



    const onAdd = (cantidad) => {
        console.log(`se ejecuto OnAdd, compro ${cantidad} producto`);
    }



    return (

        <div >
            {/* <h1 className="greeting">{greeting}</h1> */}
            <ItemList catalogo={autos} />

            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </div>
    )

}
export default ItemListContainer