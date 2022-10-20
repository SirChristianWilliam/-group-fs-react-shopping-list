import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import CartList from '../CartList/CartList.jsx';


function App() {
const [cartList, setCartList] = useState([]);

useEffect( () => {
    getCartList();
  }, [])

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

return (
        <div className="App">
            <Header />
            <main>
                <CartList 
                cartList = {cartList}
                />
                
            </main>
        </div>
    );
}

export default App;
