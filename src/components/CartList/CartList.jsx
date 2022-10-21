function CartList({cartList}) {
    return (
        <>
        
        <ul>
            {cartList.map(cartitem => (
        <li key={cartitem.id}>
        {cartitem.item} {cartitem.quantity} {cartitem.unit}
        </li>
                

            ))}
        </ul>
        </>
    );
}

export default CartList;