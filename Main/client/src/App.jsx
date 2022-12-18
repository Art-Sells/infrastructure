import { Route } from 'react-router-dom';
import Home from './Home';
import Roadmap from './Roadmap';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/roadmap" component={Roadmap} />    
    </div>
  );
}
export default App;