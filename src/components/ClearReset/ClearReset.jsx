function ClearReset({ ClearItems, ResetPurchase }) {
    console.log('in ClearReset component');

    const handleClear = (evt) => {
        evt.preventDefault();
        console.log('Clear items');
        ClearItems();
    }

    const handleReset = (evt) => {
        evt.preventDefault();
        console.log('Reset purchase');
        ResetPurchase();
    }
    return (
        <>
            <h3>ClearReset</h3>
            <div>
                <button className="clearBtn" onClick={handleClear}>Clear</button>
                <button className="resetBtn" onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}

export default ClearReset;