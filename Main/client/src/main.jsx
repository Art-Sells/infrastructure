import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Home'
// import Roadmap from './Roadmap'
// import StayUpdated from './StayUpdated'

// import HomeTest from './test/HomeTest'
// import RoadmapTest from './test/RoadmapTest'
// import StayUpdatedTest from './test/RoadmapTest'

import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    {/* <Roadmap />
    <StayUpdated />

 Testing Jsx Below 
    <HomeTest />
    <RoadmapTest />
    <StayUpdatedTest />     */}
  </React.StrictMode>,
)


