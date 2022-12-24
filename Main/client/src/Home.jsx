import React from 'react';
import './assets/css/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


// Most likely have to individually style via dApp specifics

function Home() {

  return (
    
    <div>   
      <Helmet>
	   {/* <link rel="stylesheet" href="/assets/css/Home.css" /> */}
	
		<meta charset="UTF-8"/>
		
 {/* Below information for social media sharing and search-engine/browser optimization 	 */}
		<meta name="title" content="Ecare"/>
		<meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
		<meta name="google" content="nositelinkssearchbox"/>
		<meta name="keywords" content="Ecare, Ethereum"/>
		<meta name="author" content="Ecare"/>
		<meta name="viewport" id="viewport" content="width=device-width,user-scalable=yes,initial-scale=1" />
		
		<link rel="icon" type="image/x-icon" href="/icons&images/Iconic.ico" sizes="156x156"/>
				 {/* Change below link after test */}
		<link rel="canonical" href="https://ecare.exchange"/>
		
		<meta property="og:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>	
		<meta property="og:site_name" content="Ecare"/>	
		<meta property="og:type" content="object"/>				
		<meta property="og:title" content="Ecare"/>
				 {/* Change below link after test */}
		<meta propety="og:url" content="https://ecare.exchange"/>
		<meta property="og:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
		<meta property="og:image:type" content="image/jpg"/>
		<meta property="og:image:width" content="700"/>
		<meta property="og:image:height" content="400"/>
		
		<meta name="twitter:title" content="Ecare"/>
		<meta name="twitter:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>
				 {/* Change below link after test  */}
		<meta name="twitter:url" content="https://ecare.exchange"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
		<meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
 {/* Above information for social media sharing and search-engine/browser optimization */}

		<title>Ecare</title>
      </Helmet>
      
      <div id="above">
      
        <img class="icon" src="/icons&images/Icon.png"/>
      
        <h1 id="title">ecare</h1>
        
        <div id="name">
          <p id="names">ethereum</p> 
          <p id="names">combinatorial</p> 
          <p id="names">auction</p> 
          <p id="names">rate</p> 
          <p id="names">exchange</p>
        </div>
        
          {/* Change below link after test */}
        <a href="/prototype" id="prototype">
          Prototype
        </a>
        
        <br></br>
        
          {/* Change below link after test */}
        <a href="/guide" id="guide">
          Guide
        </a>
      
      </div>
      
      {/* <div id="about"> 
        
          <p id="about-desc">Created to house an ecosystem 
          to lift storytellers out of poverty.</p>
          
      </div>	  */}
        
      <div id="ecosystem">
      
        {/* Change below link after test   */}
        <a href="https://arells.com"
          id="eco-link">		      
          <img id="letter-logo" src="/icons&images/Arells-Logo.png"></img>	      
        </a>		 
    
    
      </div>
      
            
      <div id="infrastructure">

        {/* Change below link after test  */}
        <Link to="/roadmap" id="roadmap">Roadmap
        </Link>
        
        <br></br>
              
        <a href="https://github.com/orgs/Ecare-Exchange"
          target="_blank"
          id="contact">
          <img id="github" src="/icons&images/GithubBright.png"></img>
        </a>  	
          
      </div>
    </div>
    
  )
  
}

export default Home
