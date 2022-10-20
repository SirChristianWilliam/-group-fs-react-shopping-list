function CartItem({cartitem}) {
    return (
        <>
        <li>
            {cartitem.item} {cartitem.quantity} {cartitem.unit}
        </li>
        </>
    );
    
}

export default CartItem;

