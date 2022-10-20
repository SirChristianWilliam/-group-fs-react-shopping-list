import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import CartList from '../CartList/CartList.jsx';


function App() {
const [cartList, setCartList] = useState([]);

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
