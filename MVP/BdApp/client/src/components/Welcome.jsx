import './css/Welcome.css'
import {Loader} from './'


const Input = ( name, type, value, handleChange ) => (
    <input
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        id="address-input"/>
);

const Welcome = () => {

    const connectWallet =() => {

    }

    return (
        <>
        <div id="walletWrapper">
            <label id="address">Address To</label>
            <Input  
                name="addressTo"
                type="text"
                handleChange={() => {}}/>
            <br/>    
            <label id="amount">Amount (ETH)</label>    
            <Input  
                name="amount"
                type="number"
                handleChange={() => {}}/>     
            <br/> 
            <div id="load"/>  
            {true ? (
                <Loader />
            ) : (
                <div>

                </div>
            )}             
            <button
                type="button"
                onClick={connectWallet}
                id="connectWallet">Connect Wallet</button>
        </div>
        </>
    );
}

export default Welcome;