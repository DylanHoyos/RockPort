import React from 'react'
import data from '../../components/MockData';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([]);
    const { id } = useParams();
    // console.log(itemDetail);



    const getItem = new Promise((res) => {
        setTimeout(() => {
            const item = data.filter(auto => auto.id === id)
            setItemDetail(item[0])
            res(itemDetail)

        }, 2000);
    })

    useEffect(() => {

        getItem.then(res => setItemDetail(res.filter(deta => deta.id === id)))
    }, [])

    return (
        <ItemDetail info={itemDetail} />
    )
}

export default ItemDetailContainer