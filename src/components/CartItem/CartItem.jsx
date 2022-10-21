function CartItem({cartitem, buyItem, removeItem}) {

    const onBuy = () => {
        buyItem(cartitem);
    }
    
    const onRemove = () => {
        removeItem(cartitem);
    }
    
        return (
        
                <tr>
                    <td>{cartitem.item}</td> <td>{cartitem.quantity}</td> <td>{cartitem.unit}</td> <td>False</td>
                    <td><button className="buyBtn" onClick={onBuy}>Buy</button></td>
                    <td><button className="removeBtn" onClick={onRemove}>Remove</button></td>
                </tr>
        
        );
    }
    
    export default CartItem;
  
