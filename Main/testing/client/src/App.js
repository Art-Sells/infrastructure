import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Link to="/">Test</Link>
        </div>



        <Switch>
          <Route path='/'exact> 
            <Test/>          
          </Route>
        </Switch>
      </Router>
      {/* <div id="App">
        <h1>
          Testing , 1,2,3
        </h1>
      </div>      */}
    </>
  );
}


export default App;
