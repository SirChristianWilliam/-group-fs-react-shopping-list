import React, { useState } from 'react';
function CartForm({addCart}){
    
    const [newItem, setItem] = useState('')
    const [newQuantity, setQuantity] = useState('')
    const [newUnit, setUnit] = useState('')

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const newCartItems = {
            item: newItem,
            quantity:newQuantity,
            unit: newUnit}
        addCart(newCartItems)
        clearCart()
    }
    const clearCart = () =>{
        setItem('');
        setQuantity('');
        setUnit('');

    }

    return(
       <form onSubmit={handleSubmit}>
        <label>Item</label>
       <input onChange={(event) => {setItem(event.target.value)}}
            value={newItem}/>
            <br />
         <label>Quantity</label>
       <input onChange={(event) => {setQuantity(event.target.value)}}
            value={newQuantity}/>
         <label>Unit</label>
       <input onChange={(event) => {setUnit(event.target.value)}}
            value={newUnit}/>
                <br />
        <button >Submit</button>
       </form>

    )
}

export default CartForm