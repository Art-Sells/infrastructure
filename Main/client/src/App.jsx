import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Roadmap from './Roadmap';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </nav>      
      <Route exact path="/" component={Home} />
      <Route path="/roadmap" component={Roadmap} />    
    </div>
  );
}
export default App;