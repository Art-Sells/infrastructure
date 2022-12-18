import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')
  ).render(
    <Router>
      <Home />      
    </Router>
)



