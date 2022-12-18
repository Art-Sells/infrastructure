import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import Home from './Home'
// import Roadmap from './Roadmap'
// import Guide from './Guide'
// import Prototype from './Prototype'

// import HomeTest from './test/HomeTest'
// import RoadmapTest from './test/RoadmapTest'
// import StayUpdatedTest from './test/RoadmapTest'

import './assets/css/main.css'

ReactDOM.createRoot(
  <BrowserRouter>
    {/* <Route exact path="/" component={Home} /> */}
    {/* <Route path="/roadmap" component={Roadmap} />
    <Route path="/guide" component={Guide} />
    <Route path="/prototype" component={Prototype} /> */}
  </BrowserRouter>, 
  
  document.getElementById('root')
  ).render(
    <React.StrictMode>
      <Home />
      {/* <Roadmap />
      <Guide />
      <Prototype /> */}

    {/* Testing Jsx Below 
      <HomeTest />
      <RoadmapTest />
      <GuideTest />    
      <PrototypeTest /> */}
      
    </React.StrictMode>,

    
)


