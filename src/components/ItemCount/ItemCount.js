
const ItemCount = ({ stock, setStock }) => {

    const onAdd = () => {
        setStock(stock + 1)
    }
    const onRemove = () => {
        setStock(stock - 1)
    }



    return (

        <>
            <h3>{stock}</h3>
            {stock < 0 ? onAdd() : console.log("se modifico el stock")}
            <button onClick={onRemove} className="buttons"> Restar</button>
            <button onClick={onAdd} className="buttons"> Sumar</button>
        </>
    )
}

export default ItemCount