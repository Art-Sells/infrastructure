import { useState } from 'react'
import './App.css'
import { Welcome, Loader, Services, Transactions, Footer} from './components'

const App = () => {

  return (
    <div id="wrapper">
        <Welcome/>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default App;
