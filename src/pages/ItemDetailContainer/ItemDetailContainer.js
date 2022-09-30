import React from 'react'
import data from '../../components/MockData';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([]);
    const { id } = useParams();




    const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, 'Items', id)

        getDoc(queryDoc)
            .then((res) => {
                setItemDetail(res.data())
            })
    }

    useEffect(() => {
        getItem();
    }, [id])

    return (
        <ItemDetail info={itemDetail} />
    )
}

export default ItemDetailContainer