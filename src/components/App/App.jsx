import React from 'react';
import axios from 'axios';
import CartForm from '../CartForm/CartForm.jsx';
import CartItem from '../CartItem/CartItem.jsx';
import CartList from '../CartList/CartList.jsx';
import Header from '../Header/Header.jsx'

import './App.css';


function App() {



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
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <CartForm 
            addCart={addCart}/>
            <CartList />
            <CartItem />
        </div>
    );
}

export default App;
