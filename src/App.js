import './App.css';
import Game from './Game/Game'
import Home from './Home/Home'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <Router hashType='noslash'>
      <Switch>
        <Route exact path={'/home'}>
          <Home />
        </Route>
        <Route exact path={'/game'}>
          <Game />
        </Route>
        <Route path='/'>
          <Redirect to={'/home'} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
