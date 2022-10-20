import CartItem from "../CartItem/CartItem";

function CartList({cartList}) {
    return (
        
        <ul>
            {cartList.map(cartitem => (
        
        <CartItem 
        key={cartitem.id}
        cartitem={cartitem}
        />

            ))}
        </ul>
       
    );
}

export default CartList;