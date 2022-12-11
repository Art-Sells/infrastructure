import React, {useContext} from 'react';
import './css/Welcome.css'

import {Loader} from './'
import { TransactionContext } from '../context/TransactionContext';


const Input = ( name, type, value, handleChange ) => (
    <input
        type={type}
        step="0.0001"
        value={value}
        handleChange={(e) => handleChange(e, name)}
        id="address-input"
    />
);

const Welcome = () => {

    const { 
        connectWallet, 
        currentAccount,
        formData,
        sendTransaction,
        handleChange
     } = useContext(TransactionContext);

    const handleSubmit =(e) => {
        const { addressTo, amount } = formData;

        e.preventDefault();

        if(!addressTo || !amount) return;

        sendTransaction();
    }

    return (
        <>
        <div id="walletWrapper">
            <label id="address">Address To</label>
            <Input  
                name="addressTo"
                type="text"
                handleChange={handleChange}/>
            <br/>    
            <label id="amount">Amount (ETH)</label>    
            <Input  
                name="amount"
                type="number"
                handleChange={handleChange}/>     
            <br/>  
            {false ? (
                <Loader />
            ) : (
                <button
                type="button"
                onClick={handleSubmit}
                id="submit">
                    Send
                </button>
            )}             
            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}
                    id="connectWallet">Connect Wallet
                </button>
            )}
            {currentAccount && (
                <p>
                    Wallet Connected
                </p>
            )}
        </div>
        </>
    );
}

export default Welcome;