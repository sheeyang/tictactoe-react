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

export const GHHOMEPAGE = "/tictactoe-react"// this is the homepage in github pages, can be left empty

function App() {
  const [boardSize, setBoardSize] = useState(3)

  function handleSubmit(data) {
    setBoardSize(data)
  }

  return (
    <Router>
      <Switch>
        <Route exact path={`${GHHOMEPAGE}/home`}>
          <Home onSubmit={handleSubmit} />
        </Route>
        <Route exact path={`${GHHOMEPAGE}/game`}>
          <Game boardSize={boardSize} />
        </Route>
        <Route path='/'>
          <Redirect to={`${GHHOMEPAGE}/home`} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
