const Input = ( placeholder ) => (
    <input
        placeholder={placeholder}
        />
);

const Welcome = () => {

    const connectWallet =() => {
        
    }

    return (
        
        <button
            type="button"
            onClick={connectWallet}
            id="connectWallet">Connect Wallet</button>
    );
}

export default Welcome;