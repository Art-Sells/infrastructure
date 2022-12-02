const Input = ( placeholder ) => (
    <input
        placeholder={placeholder}
        />
);

const Welcome = () => {

    const connectWallet =() => {

    }

    return (
        <>
        <div id="walletWrapper">
            <Input 
                placeholder="Address To" 
                name="adressTo"
                type="text"
                handleChange={() => {}}/>
            <button
                type="button"
                onClick={connectWallet}
                id="connectWallet">Connect Wallet</button>
        </div>
        </>
    );
}

export default Welcome;