import './App.css';
import Game from './Game/Game'
import Home from './Home/Home'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  const [boardSize, setBoardSize] = useState(3)

  function handleSubmit(data) {
    setBoardSize(data)
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home onSubmit={handleSubmit} />
        </Route>
        <Route exact path='/game'>
          <Game boardSize={boardSize} />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
