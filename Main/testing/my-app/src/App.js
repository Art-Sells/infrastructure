import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Roadmap from './Roadmap.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact/>
      </Routes>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Roadmap} />    */}
    </BrowserRouter>
  );
}

export default App;
