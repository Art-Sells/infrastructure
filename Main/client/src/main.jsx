import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Roadmap from './Roadmap';

function main(){
    return (
      <>
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route path="/roadmap" component={Roadmap} />    */}
      </Router>      
      </>
    );
}

export default main



