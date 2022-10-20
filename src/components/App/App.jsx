import React from 'react';
import CartForm from '../CartForm/CartForm.jsx';
import CartItem from '../CartItem/CartItem.jsx';
import CartList from '../CartList/CartList.jsx';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <CartForm />
            <CartList />
            <CartItem />
        </div>
    );
}

export default App;
