import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Roadmap from './Roadmap';
import styled from "styled-components";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

function main(){
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/roadmap" component={Roadmap} />    */}
      </BrowserRouter>
    );
}

export default main



