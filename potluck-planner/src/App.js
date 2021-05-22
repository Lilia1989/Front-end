import './App.css';
import Home from './Component/Home'
import { BrowseRouter as Route, Switch, Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
   </>
  );
}

export default App;
