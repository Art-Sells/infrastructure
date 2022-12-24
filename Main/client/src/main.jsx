import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')
  ).render(
    <Router>
      <Home />      
    </Router>
)



