function ClearReset({ ClearItems ,ResetPurchase }) {
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
            <p>Add ResetButton here</p>
            <p>Add ClearButton here</p>
        </>
    );
}

export default ClearReset;