import './App.css';
import Game from './Game'
import Home from './Home'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState('Home')
  const [boardSize, setBoardSize] = useState(3)

  function getSize(data) {
    setBoardSize(data)
    setPage('Game')
  }

  return (
    <div>
      {(() => {
        switch (page) {
          case 'Game':
            return <Game boardSize={boardSize} />
          default:
            return <Home onSubmitCallback={getSize} />
        }
      })()}
    </div>
  )
}

export default App;
