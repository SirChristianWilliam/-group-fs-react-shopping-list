import React, { useState } from 'react';
function CartForm({getCart}){
    
    const [cart, setCart] = useState('')

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        getCart(cart)
        clearCart()
    }
    const clearCart = () =>{
        
    }

    return(
        <h2>CartForm</h2>
    )
}

export default CartForm