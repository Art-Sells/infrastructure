import { useState } from 'react'
import './assets/css/Prototype.css'

function Prototype() {
  const [count, setCount] = useState(0)

  return (
    <div id="body">
    
       {/* Change below link after test */}
      <a href="/" >
        <img id="img" src="/icons&images/appIcon.png"/>
      </a>
        
      <section class="exchange-grid">

        <div id="left-top-wallet">
        
          <section id="wallet-one-not-connected" style="display:block">
            <button onclick="connectWalletOne()" 
              id="connect-wallet-one" type="button">
              Connect Wallet One
            </button>  
          </section>
          
          <section id="wallet-one-connected" style="display:none">
            <button class="eth" id="choose-token">
                <img id="ethicon" src="/icons&images/eth-icon.png"/>
                <p id="eth-name">ETH</p>
            </button>
            
            <div class="form-group">
              <label id="label">Balance</label>
              <br></br>
              <p id="dllr-connected">$
                <span id="balance-one-connected" style="display:inline">100,000.00
                </span>
                <span id="balance-one-connected-value" style="display:none"></span>
              </p>
            </div>
            
            <div class="form-group-tokens">
              <label id="label">Total Tokens</label>					
              <br></br>
              <p id="tokens-one-connected" style="display:inline">100.00</p>
              <p id="tokens-one-connected-value" style="display:none"></p>
            </div>
            
            <div class="form-group-exchange">
              <label id="label">Exchange Tokens</label>						
              <br></br>
              <input id="input-one" type="text" 
                  onkeypress="return isNumberKey(event,this)"
                    pattern="^[0-9]*[.]?[0-9]*"
                    inputmode="decimal"	
                  step="any" value="1.01" />
            </div>	

              <br></br>

              <button id="connected-wallet">
                Connected
              </button>  
    
          </section>
          
        </div>

        <div id="right-bottom-wallet">
        
          <section id="wallet-two-not-connected" style="display:block">
            <button onclick="connectWalletTwo()" 
                id="connect-wallet-two" type="button">
                Connect Wallet Two
              </button>
          </section>
          
          <section id="wallet-two-connected" style="display:none">

            <button class="weth" id="choose-token">
              <img id="ethicon" src="/icons&images/weth-icon.png"/>
              <p id="weth-name">WETH</p>
            </button>

            <div class="form-group">
              <label id="label">Balance</label>
              <br></br>
              <p id="dllr-connected">$
                <span id="balance-two-connected" style="display:inline">90,000.00
                </span>
                <span id="balance-two-connected-value" style="display:none"></span>
              </p>
            </div>
            
            <div class="form-group-tokens">
              <label id="label">Total Tokens</label>					
              <br></br>
              <p id="tokens-two-connected" style="display:inline">90.00</p>
              <p id="tokens-two-connected-value" style="display:none"></p>              
            </div>
            
            <div class="form-group-exchange">
              <label id="label">Exchange Tokens</label>						
              <br></br>
              <input id="input-two" type="tel" 
                  onkeypress="return isNumberKey(event,this)"
                    pattern="^[0-9]*[.]?[0-9]*"
                    inputmode="decimal"	      
                  step="any" value="1.01"/>
            </div>										
            
            <br></br>

              <button id="connected-wallet">
                Connected
              </button>
          </section>
          
        </div>

      </section>
      
      
      
      <a id="reset" onclick="resetWallets()" style="display:none">
        <img id="refresh" src="/icons&images/refreshIcon.png"/>
      </a>      
      
      <br></br>
      
      <a onclick="exchange()" id="exchange" style="display:block">
          EXCHANGE
      </a>
      
      <hr></hr>

      <h3 id="name">
        <p id="names">ethereum</p>
        <p id="names">combinatorial</p>
        <p id="names">auction</p>
        <p id="names">rate</p>
        <p id="names">exchange</p>
        <p id="proto-name">prototype</p>
      </h3>
      
      <br></br>
           {/* Change below link after test  */}
      <a href="/guide" target="_blank" id="guide">
        Guide
      </a>

    </div>
  )
}

export default Prototype
