import { useState } from 'react'
import './assets/css/Guide.css'
import { Link } from 'react-router-dom';

function Guide() {
  const [count, setCount] = useState(0)

  return (
    <div id="body" >
	
      <section id="wrapper">
      
       {/* Change below link after test  */}
        <Link id="homelink" to="/">
          <img id="img" src="/icons&images/appIcon.png"/>	  
        </Link>	
        
          <span>Guide</span>
          
          <hr></hr>
      
        <p id="about">
          An exchange system immune to bear-markets
        </p>
        
        <div id="step-one">
          <h1 id="step-one-title">Step One</h1>
          <p id="describe-prototype">Launch the Prototype</p>
        {/* Change below link after test */}
          <Link to="/prototype" id="prototype">
            Prototype
          </Link>
        </div>
        
        <div id="step-two">
          <h1 id="step-title">Step Two</h1>
          <p id="describe">
          Connect Wallet One & Wallet Two:</p> 
            <img id="connect-wallets" src="/icons&images/steptwo.jpg"/>	  
        </div>
        
        <div id="step-three">
          <h1 id="step-title">Step Three</h1>
          <p id="describe">
          Enter number of tokens you wish to exchange 
          between Wallet One & Wallet Two within the "Exchange Tokens"
          input boxes:</p>
              <img id="connect-wallets" src="/icons&images/stepthree.jpg"/>	  
        </div>
        
        <div id="step-four">
          <h1 id="step-title">Step Four</h1>
          <p id="describe">
          Exchange the tokens to witness Ecare's consensus mechanism work:</p>
              <img id="connect-wallets" src="/icons&images/stepfour.jpg"/>	
              <p id="describe-notice">
          You'll notice wallet balances never decrease in 
          value no matter how many tokens
          exchanged. This fosters a self-sustaining token exchange
          system immune to bear-market volatility.</p>  
        </div>
        
        <div id="step-five">
          <h1 id="step-title">Step Five</h1>
          <p id="optional">
          optional</p>
          <p id="describe">
          Reset Wallet Balances & Total Tokens. Then, repeat 
          Steps Three & Four until desired balances between both 
          wallets are reached:</p>
              <img id="connect-wallets" src="/icons&images/stepfive.jpg"/>
        </div>
      
      </section>
  
    </div>
  )
}

export default Guide
