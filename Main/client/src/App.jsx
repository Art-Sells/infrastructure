import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
// import Roadmap from './components/pages/Roadmap';

function App(){
    return (
      <>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/roadmap" component={Roadmap} />    */}
        </Routes>
      </Router>      
      </>
    );
}

export default App



