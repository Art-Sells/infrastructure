import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Roadmap from './Roadmap';

function main(){
    return (
      <>
      <Router>
        <Home/>
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/roadmap" component={Roadmap} />    */}
        </Routes>
      </Router>      
      </>
    );
}

export default main



