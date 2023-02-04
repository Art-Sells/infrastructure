import React from "react";
// Change below link after test
import './css/Home.css';
import { Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Favicon from "react-favicon";


const App = () => {
    return ( 
        <>
        <Favicon url="/icons&images/Iconic.ico"/>
        <HelmetProvider>	
                                                        
                <meta charSet="UTF-8"/>
                
        {/* <!-- Below information for social media sharing and search-engine/browser optimization -->		 */}
                <meta name="title" content="Ecare"/>
                <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
                <meta name="google" content="nositelinkssearchbox"/>
                <meta name="keywords" content="Ecare, Ethereum"/>
                <meta name="author" content="Ecare"/>
                <meta name="viewport" id="viewport" content="width=device-width,user-scalable=yes,initial-scale=1" />
                
                        {/* <!-- Change below link after test --> */}
                <link rel="canonical" href="https://ecare.exchange"/>
                
                <meta property="og:image" content="https://user-images.githubusercontent.com/51394348/169722650-92d9cef2-3288-433d-8a9f-9bebb8911c38.jpg"/>	
                <meta property="og:site_name" content="Ecare"/>	
                <meta property="og:type" content="object"/>				
                <meta property="og:title" content="Ecare"/>
                        {/* <!-- Change below link after test --> */}
                <meta propety="og:url" content="https://ecare.exchange"/>
                <meta property="og:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta property="og:image:width" content="700"/>
                <meta property="og:image:height" content="400"/>
                
                <meta name="twitter:title" content="Ecare"/>
                <meta name="twitter:image" content="https://user-images.githubusercontent.com/51394348/169722650-92d9cef2-3288-433d-8a9f-9bebb8911c38.jpg"/>
                        {/* <!-- Change below link after test --> */}
                <meta name="twitter:url" content="https://ecare.exchange"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
                <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
        {/* <!-- Above information for social media sharing and search-engine/browser optimization -->	 */}
        
                <title>Ecare</title>

        {/* body styling element */}
                <style>
                {`
                        body {
                                text-align: center;
                                font-family: Arial;
                                margin-top: 0%;
                                margin-left: 0%;
                                margin-right: 0%;
                                background-color: #1f1f1f;
                                margin-bottom: 0%;
                        }

                        @media screen and (max-width: 650px) {
                                body {
                                -webkit-text-size-adjust: none;
                                }
                        }
                `}
                </style>        


        </HelmetProvider>                

        <div id="home-above">
                
        <img id="home-icon" src="/icons&images/Icon.png"/>
        
        <h1 id="home-title">ecare</h1>
        
        <div id="home-name">
                <p id="home-names">ethereum</p> 
                <p id="home-names">combinatorial</p> 
                <p id="home-names">auction</p> 
                <p id="home-names">rate</p> 
                <p id="home-names">exchange</p>
        </div>
        
                {/* <!-- Change below link after test --> */}
        <Link to="/prototype" id="home-prototype">
                Prototype
        </Link>
        
        <br/>
        
                {/* <!-- Change below link after test --> */}
        <Link to="/about" id="home-guide">
                Guide
        </Link>
        
        </div>
        
        {/* <!-- 		<div id="about"> 
                
                <p id="about-desc">Created to house an ecosystem 
                to lift storytellers out of poverty.</p>
                
                </div>	  -->  */}
                
                <div id="home-ecosystem">
                
                        {/* <!-- Change below link after test -->		  */}
                <a href="https://arells.com"
                        id="home-eco-link">		      
                <img id="home-letter-logo" src="/icons&images/Arells-Logo.png"/>	      
                </a>		 


                </div>
        
                
                <div id="home-infrastructure">
                        {/* <!-- Change below link after test --> */}
                        
                <Link to="/about" id="home-roadmap">Roadmap
                </Link>
                
                <br/>
                        
                <a href="https://github.com/orgs/Ecare-Exchange"
                        target="_blank"
                        id="home-contact">
                        <img id="home-github" src="/icons&images/GithubBright.png"/>
                </a>  	
                
        </div>
        </>
    );
}

export default App;