function CartItem({cartitem, buyItem, removeItem}) {

const onBuy = () => {
    buyItem(cartitem);
}

const onRemove = () => {
    removeItem(cartitem);
}

    return (
        <>
        <li>
            {cartitem.item} {cartitem.quantity} {cartitem.unit}
            <button className="buyBtn" onClick={onBuy}>Buy</button>
            <button className="removeBtn" onClick={onRemove}>Remove</button>
        </li>
        </>
    );
}

export default CartItem;