import React from 'react'
import data from '../MockData';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([{}]);
    console.log(itemDetail);
    const item = data.filter(auto => auto.id === '3')

    const getItem = new Promise((res) => {
        setTimeout(() => {
            res(item)

        }, 2000);
    })
    useEffect(() => {
        getItem.then(res => setItemDetail(res))
    }, [])

    return (
        <ItemDetail info={itemDetail} />
    )
}

export default ItemDetailContainer