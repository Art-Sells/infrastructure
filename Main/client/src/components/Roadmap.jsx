import React from 'react';
import './assets/css/Roadmap.css';
import { Link } from 'react-router-dom';

function Roadmap() {

  return (
    <div>
	
     {/* change link below after test */}
        <Link id="homelink" to="/">
           <img id="img" src="/icons&images/guideIcon.png"/>	  
        </Link>	
        <span>Roadmap</span>
        
     	{/* <section id="wrapper-ongoing">
      
        <h3>Present</h3>
      
        <form method="get" target="_blank" action="https://github.com/Ecare-Exchange/infrastructure/tree/main/R%26D">
        <button id="wrapper-content">
          <p id="milestone">R&D Work 
          </p>
          <p id="status-title">Status
          </p>			
          <p id="status">Ongoing
          </p>
        </button>
        </form>	
      
       </section>	      */}
      
      <section id="wrapper-date-top">
      
        <h3>Jun 2022 - Jul 2022</h3>
      
       {/* change link below after test  */}
        <form method="get" target="_blank" action="/prototype">
        <button id="wrapper-content">
          <p id="milestone">Prototype
          </p>
          <p id="status-title">Status
          </p>			
          <p id="status">Completed | Launched
          </p>
        </button>
        </form>	
        
       {/* change link below after test  */}
        <form method="get" target="_blank" action="/guide">		
        <button id="wrapper-content">
          <p id="milestone">Prototype Guide
          </p>
          <p id="status-title">Status
          </p>	
          <p id="status">Completed | Launched
          </p>				
        </button>
        </form>
      
      </section>
       
      <section id="wrapper-date">
      
        <h3>Aug 2022 - Jan 2023</h3>
      
        <form method="get" target="_blank" action="https://github.com/Ecare-Exchange/infrastructure/tree/main/MVP/BdApp">
        <button id="wrapper-content">
          <p id="milestone">Base dApp
          </p>
          <p id="status-title">Status
          </p>			
          <p id="status">Research & Development
          </p>
        </button>
        </form>	
      
       </section>	 
       
       <section id="wrapper-date">
      
        <h3>Feb 2023 - Jul 2023</h3>
      
        <form method="get" target="_blank" action="https://github.com/Ecare-Exchange/infrastructure/tree/main/MVP">
        <button id="wrapper-content">
          <p id="milestone">Internal Market API
          </p>
          <p id="status-title">Status
          </p>			
          <p id="status">Announced
          </p>
        </button>
        </form>	
      
       </section>	 
       
       <section id="wrapper-date">
      
        <h3>Aug 2023 - Aug 2025</h3>
      
        <form method="get" target="_blank" action="https://github.com/Ecare-Exchange/infrastructure/tree/main/MVP">
        <button id="wrapper-content">
          <p id="milestone">Full dApp
          </p>
          <p id="status-title">Status
          </p>			
          <p id="status">Announced
          </p>
        </button>
        </form>	
      
       </section>		 	 
      
         <footer>
            
          <a href="https://github.com/orgs/Ecare-Exchange"
              target="_blank"
              id="contact">
              <img id="github" src="/icons&images/GithubBright.png"></img>
          </a>  	
          
      </footer>
      
      
      </div>
  )
}

export default Roadmap
