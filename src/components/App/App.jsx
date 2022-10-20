import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ClearReset from '../ClearReset/ClearReset.jsx';


function App() {




    const ClearItems = () => {
        console.log('in clear items');
        axios({
            method: 'DELETE',
            url: `/cart/${item}`
        })
        .then((response) = {
            // getCart();
        })
        .catch((err) => {
            alert('Error in ClearItems');
            console.log(err);
        });
    };

    const ResetPurchase = () => {
        console.log('in reset purchase');
        axios.put('/reset')
        .then((response) = {
            // getCart();
        })
        .catch((err) => {
            alert('Error in ResetPurchase');
            console.log(err);
        });
    };



    return (
        <div className="App">
            <Header />

            <ClearReset
                ClearItems={ClearItems}
                ResetPurchase={ResetPurchase}
            />
            
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
