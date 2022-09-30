import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from "../../components/ItemCount/ItemCount"
import data from '../../components/MockData'
import ItemList from '../../components/ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [autos, setAutos] = useState([]);
    const { catID } = useParams();

    const getCars = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'Items');

        if (catID) {
            const queryFilter = query(querySnapshot, where('categoryID', '==', catID))
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((prod) => {
                    return { id: prod.id, ...prod.data() }
                })
                setAutos(data);
            })

        } else {

            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((prod) => {
                    return { id: prod.id, ...prod.data() }
                })
                setAutos(data);
            })

        }


    }

    useEffect(() => {
        getCars();

    }, [catID])







    return (

        <div >
            {/* <h1 className="greeting">{greeting}</h1> */}
            <ItemList catalogo={autos} />



        </div>
    )

}
export default ItemListContainer