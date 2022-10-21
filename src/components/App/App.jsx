import React from 'react';
import axios from 'axios';

import CartForm from '../CartForm/CartForm.jsx';
import CartItem from '../CartItem/CartItem.jsx';
import {useEffect, useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import CartList from '../CartList/CartList.jsx';
import ClearReset from '../ClearReset/ClearReset.jsx';

function App() {

const [cartList, setCartList] = useState([]);

useEffect( () => {
    getCartList();
}, [])

console.log(cartList);

  const getCartList = () => {
    // make an AJAX request using axios
    axios({
      method: 'GET',
      url: '/cart'
    })
      .then( (response) => {
        console.log('cart list data:', response.data);
        // put data into state
        setCartList(response.data);
      })
      .catch(function (error) {
        console.log('Error in gettting cart:', error);
      });
  }
  function addCart(newCartItems){
    console.log('In addCart')

    axios({
        method: 'POST',
        url: '/cart',
        data: newCartItems
     })
    .then(response => {
        console.log('Response is:',response)

            getCartList();

    })
    .catch(err => {
      alert('Error Adding Cart');
      console.log(err);
    })
}
    const ClearItems = () => {
        console.log('in clear items');
        axios({
            method: 'DELETE',

            url: `/cart/clear`
        })
        .then((response) => {
            getCartList();
        })
        .catch((err) => {
            alert('Error in ClearItems');
            console.log(err);
        });
    };

    const ResetPurchase = () => {
        console.log('in reset purchase');
        axios({
            method: 'PUT',
            url: '/cart/reset'
        })
        .then((response) => {
            getCartList();

        })
        .catch((err) => {
            alert('Error in ResetPurchase');
            console.log(err);
        });
    };
    const buyItem = (cartitem) => {
      console.log('in Buy item');
      axios({
        method: 'PUT',
        url: `/cart/${cartitem.id}`
      })
      .then(response => {
        getCartList();
      })
      .catch((error) => {
        console.log('buy item error');
      })
    }

    const removeItem = (cartitem) => {
      console.log('in remove item');
      axios({
        method: 'DELETE',
        url: `/cart/${cartitem.id}`
      })
      .then(response => {
        getCartList();
      })
      .catch((error) => {
        console.log('remove item error');
      })
    }

    return (

        <div className="App">
            <Header />
            <CartForm 
            addCart={addCart}
            />
            <ClearReset
                ClearItems={ClearItems}
                ResetPurchase={ResetPurchase}
            />
            

            <main>
                <CartList 
                cartList={cartList}
                buyItem={buyItem}
                removeItem={removeItem}
                />
                
            </main>
        </div>
    );
}

export default App;
