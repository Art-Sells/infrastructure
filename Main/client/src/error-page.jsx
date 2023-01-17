import { useRouteError } from "react-router-dom";
import "./css/error.css";
import { Helmet } from 'react-helmet';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <Helmet>	
                
          <meta charset="UTF-8"/>
          
  {/* <!-- Below information for social media sharing and search-engine/browser optimization -->		 */}
          <meta name="title" content="Ecare"/>
          <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
          <meta name="google" content="nositelinkssearchbox"/>
          <meta name="keywords" content="Ecare, Ethereum"/>
          <meta name="author" content="Ecare"/>
          <meta name="viewport" id="viewport" content="width=device-width,user-scalable=yes,initial-scale=1" />
          
          <link rel="icon" type="image/x-icon" href="/icons&images/Iconic.ico" sizes="156x156"/>
                  {/* <!-- Change below link after test --> */}
          <link rel="canonical" href="https://ecare.exchange"/>
          
          <meta property="og:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>	
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
          <meta name="twitter:image" content="https://user-images.githubusercontent.com/51394348/197364687-453880c9-aee3-4880-a36b-be917e28e046.jpg"/>
                  {/* <!-- Change below link after test --> */}
          <meta name="twitter:url" content="https://ecare.exchange"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:description" content="Ethereum Combinatorial Auction Rate Exchange"/>
          <meta name="description" content="Ethereum Combinatorial Auction Rate Exchange"/>
  {/* <!-- Above information for social media sharing and search-engine/browser optimization -->	 */}

          <title>Oops!</title>


      {/* body styling element */}
      <style>
      {`
        body {
          text-align: center;
          font-family: 'MyWebFont', Arial;
          margin-left: 10%;
          margin-right: 10%;
          background-color: white;
          margin-bottom: 10%;
          margin-top: 10%;
          padding: 100px;
          border-radius: 10px;
        }
      `}
      </style>              
    </Helmet>    

    <div id="container">
        <div id="welcome-section">
        <h1 id="oops">Oops!</h1>
        <p id="oops-name">An error has occurred.</p>
        <i id="oops-message">{error.statusText || error.message}</i>
        </div>
    </div>
    </>


  );
}