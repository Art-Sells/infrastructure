import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import  ConnectWallets from "./components/modals/ConnectWallets";
import Favicon from "react-favicon";

// Change below links after test
import './css/Prototype.css';

const Prototype = () => {


    //Open Modal Functions
    const [openConnectWallets, setConnectWallets] = useState(false);

    //Wallet Connection Functions
    const [walletOne, setWalletOne] = useState('none');
    const [walletOneConnector, setWalletOneConnector] = useState('block');
    useEffect(() => {
        document.getElementById('wallet-one-not-connected').style.display = walletOneConnector;
        document.getElementById('wallet-one-connected').style.display = walletOne;
        }
    );
    function connectWalletOne() {
        setWalletOneConnector('none');        
        setWalletOne('block');      
    }
    const [walletTwo, setWalletTwo] = useState('none');
    const [walletTwoConnector, setWalletTwoConnector] = useState('block');
    useEffect(() => {
        document.getElementById('wallet-two-not-connected').style.display = walletTwoConnector;
        document.getElementById('wallet-two-connected').style.display = walletTwo;
        }
    );
    function connectWalletTwo() {
        setWalletTwoConnector('none');        
        setWalletTwo('block');      
    }


    //Reset Wallets Function
    function resetWallets(){

        console.log("Execute Reset Wallet Function");	        
        
        // var walletOneBalance = 100000.00;
        // var walletOneFormat = new Intl.NumberFormat('en-US',
        //     { minimumFractionDigits: 2 }).format(walletOneBalance);
        // document.getElementById('balance-one-connected-value').innerHTML = 
        //     walletOneFormat;
        // var walletOneTokens = 100.00;
        //     document.getElementById('tokens-one-connected-value').innerHTML = 
        //     walletOneTokens.toFixed(2);
            
        // var walletTwoBalance = 90000.00;
        //     var walletTwoFormat = new Intl.NumberFormat('en-US',
        //     { minimumFractionDigits: 2 }).format(walletTwoBalance);
        // document.getElementById('balance-two-connected-value').innerHTML = 
        //     walletTwoFormat;
        // var walletTwoTokens = 90.00;
        //     document.getElementById('tokens-two-connected-value').innerHTML = 
        //     walletTwoTokens.toFixed(2);
            
        // RWmodal.open(1, 'Wallets Reset');	
    }    
    //Input Format Function	
    function isNumberKey(event, obj) {

        var charCode = (evt.which) ? evt.which : event.keyCode
        var value = obj.value;
        var dotcontains = value.indexOf(".") != -1;
        if (dotcontains)
            if (charCode == 46) return false;
        if (charCode == 46) return true;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }    

    //Exchange Function
    function exchange(){
        if (walletOne == 'none' || walletTwo == 'none'){
            setConnectWallets(true);
            }
        else if (walletOne == 'block' && walletTwo == 'block'){
            console.log("Execute CPES");	
            
            // crossPollinationExchangeSystem();
        }
            
    }     

    return (

    <div id="prototype-wrapper">

        {/* error Modal Element*/}
        {openConnectWallets && <ConnectWallets closeConnectWallets={setConnectWallets}/>}

        {/* Helmet for Meta-tags & body Element*/}
        <Favicon url="/icons&images/Iconic.ico"/>
        <HelmetProvider>
                
            <meta charSet="UTF-8"/>
            
    {/* <!-- Below information for social media sharing and search-engine/browser optimization -->		 */}
            <meta name="title" content="Ecare"/>
            <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange Prototype"/>
            <meta name="google" content="nositelinkssearchbox"/>
            <meta name="keywords" content="Ecare, Ethereum"/>
            <meta name="author" content="Ecare"/>
            <meta name="viewport" id="viewport" content="width=device-width,user-scalable=yes,initial-scale=1" />

                    {/* <!-- Change below link after test --> */}
            <link rel="canonical" href="https://ecare.exchange/prototype"/>
            
            <meta property="og:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>	
            <meta property="og:site_name" content="Ecare"/>	
            <meta property="og:type" content="object"/>				
            <meta property="og:title" content="Ecare"/>
                    {/* <!-- Change below link after test --> */}
            <meta propety="og:url" content="https://ecare.exchange/prototype"/>
            <meta property="og:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
            <meta property="og:image:type" content="image/jpg"/>
            <meta property="og:image:width" content="700"/>
            <meta property="og:image:height" content="400"/>
            
            <meta name="twitter:title" content="Ecare"/>
            <meta name="twitter:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>
                    {/* <!-- Change below link after test --> */}
            <meta name="twitter:url" content="https://ecare.exchange/prototype"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:description" content="Ethereum Combinatorial Auction Rate Exchange Prototype"/>
            <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange Prototype"/>
    {/* <!-- Above information for social media sharing and search-engine/browser optimization -->	 */}

            <title>Prototype</title>


            {/* body styling element */}
            <style>
            {`
                body {
                    text-align: center;
                    font-family: Arial;
                    margin-left: 0%;
                    margin-right: 0%;
                    margin-top: 0%;
                    margin-bottom: 0%;
                    background-color: #f8f8fc;
                    padding-left: 40px;
                    padding-right: 40px;
                    padding-bottom: 50px;
                }
                @media screen and (max-width: 690px) {
                    body {
                    -webkit-text-size-adjust: none;
                    }
                }
            `}
            </style>              
       </HelmetProvider>
        {/* Helmet for Meta-tags & body Element*/}

       {/* <!-- Change below link after test --> */}
      <Link to="/">
        <img id="img" src="/icons&images/appIcon.png"/>
      </Link>
        
        <section className="exchange-grid">

            <div id="left-top-wallet">
            
                <section id="wallet-one-not-connected">
                    <button onClick={connectWalletOne} 
                    id="connect-wallet-one" type="button">
                    Connect Wallet One
                    </button>  
                </section>
            
                <section id="wallet-one-connected">
                    <button className="eth" id="choose-token">
                        <img id="ethicon" src="/icons&images/eth-icon.png"/>
                        <p id="eth-name">ETH</p>
                    </button>
                    
                    <div className="form-group">
                    <label id="label">Balance</label>
                    <br/>
                    <p id="dllr-connected">$
                        <span id="balance-one-connected" style={{display:"inline"}}>100,000.00
                        </span>
                        <span id="balance-one-connected-value" style={{display:"none"}}></span>
                    </p>
                    </div>
                    
                    <div className="form-group-tokens">
                    <label id="label">Total Tokens</label>					
                    <br/>
                    <p id="tokens-one-connected" style={{display:"inline"}}>100.00</p>
                    <p id="tokens-one-connected-value" style={{display:"none"}}></p>
                    </div>
                    
                    <div className="form-group-exchange">
                    <label id="label">Exchange Tokens</label>						
                    <br/>
                    <input id="input-one" type="text" 
                            onKeyDown={isNumberKey}
                            pattern="^[0-9]*[.]?[0-9]*"
                            inputMode="decimal"	
                            step="any" defaultValue="1.01" />
                    </div>	
            
                        <br></br>
            
                        <button id="connected-wallet">
                        Connected
                        </button>  
            
                </section>                
            
            </div>

            <div id="right-bottom-wallet">
            
                <section id="wallet-two-not-connected">
                    <button onClick={connectWalletTwo}  
                    id="connect-wallet-two" type="button">
                    Connect Wallet Two
                    </button>
                </section>
            
                <section id="wallet-two-connected" style={{display: !walletTwo ? 'none' : 'block'}}>

                    <button className="weth" id="choose-token">
                    <img id="ethicon" src="/icons&images/weth-icon.png"/>
                    <p id="weth-name">WETH</p>
                    </button>

                    <div className="form-group">
                    <label id="label">Balance</label>
                    <br/>
                    <p id="dllr-connected">$
                        <span id="balance-two-connected" style={{display:"inline"}}>90,000.00
                        </span>
                        <span id="balance-two-connected-value" style={{display:"none"}}></span>
                    </p>  
                    </div>
                    
                    <div className="form-group-tokens">
                    <label id="label">Total Tokens</label>					
                    <br/>
                    <p id="tokens-two-connected" style={{display:"inline"}}>90.00</p>
                    <p id="tokens-two-connected-value" style={{display:"none"}}></p>              
                    </div>
                    
                    <div className="form-group-exchange">
                    <label id="label">Exchange Tokens</label>						
                    <br/>
                    <input id="input-two" type="tel" 
                            onKeyDown={isNumberKey}
                            pattern="^[0-9]*[.]?[0-9]*"
                            inputMode="decimal"	      
                            step="any" defaultValue="1.01"/>
                    </div>										
                    
                    <br></br>

                        <button id="connected-wallet">
                        Connected
                        </button>
                        
                </section>
            
            </div>

        </section>
      
      <a id="reset" 
        // onClick={resetWallets()} 
        style={{display:"none"}}>
        <img id="refresh" src="/icons&images/refreshIcon.png"/>
      </a>      
      
      <br/>
      
      <a onClick={exchange} 
      id="exchange" style={{display:"block"}}>
          EXCHANGE
      </a>
      
      <hr/>

      <h3 id="name">
        <p id="names">ethereum</p>
        <p id="names">combinatorial</p>
        <p id="names">auction</p>
        <p id="names">rate</p>
        <p id="names">exchange</p>
        <p id="proto-name">prototype</p>
      </h3>
      
      <br/>
     	    {/* <!-- Change below link after test --> */}
      <a href="/guide" target="_blank" id="guide">
      	Guide
      </a>
    </div>
    );
}

export default Prototype;