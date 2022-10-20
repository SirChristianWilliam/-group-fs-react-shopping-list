import CartItem from "../CartItem/CartItem";

function CartList({cartList, buyItem, removeItem}) {
    return (
        
        <ul>
            {cartList.map(cartitem => (
        
        <CartItem 
        key={cartitem.id}
        cartitem={cartitem}
        buyItem={buyItem}
        removeItem={removeItem}
        />

            ))}
        </ul>
       
    );
}

export default CartList;