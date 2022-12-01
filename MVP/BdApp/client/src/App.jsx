import { useState } from 'react'
import './App.css'
import { Welcome, Loader, Services, Transactions, Footer} from './components'

const App = () => {

  return (
    <div className="min-h-screen">
        <Welcome/>
        <Loader/>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default App;
