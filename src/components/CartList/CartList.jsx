import CartItem from "../CartItem/CartItem";

function CartList({cartList, buyItem, removeItem}) {
    return (
        
        <table id="myTable">
            <thead>
            <tr>
                <th>Item</th><th>Quantity</th><th>Unit</th><th>Purchased</th><th>Buy</th><th>Remove</th>
            </tr>
            </thead>
        <tbody>
            {cartList.map(cartitem => (
        <CartItem 
        key={cartitem.id}
        cartitem={cartitem}
        buyItem={buyItem}
        removeItem={removeItem}
        />
            ))}
       </tbody>
       </table>       
    );
}

export default CartList;


