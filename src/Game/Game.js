import './Game.css';
import Tictactoe from './tictactoe'
import Board from './Board'
import { ReactComponent as ResetSVG } from './reset.svg'
import { ReactComponent as BackSVG } from './back.svg'
import { useState, useEffect } from 'react'
import { useLocation,useHistory } from 'react-router-dom'

var boardSize
var TTT
var gameOver = false


function Game() {
  const query = new URLSearchParams(useLocation().search)
  const history = useHistory()
  boardSize = query.get('boardsize')
  useEffect(() => {
    TTT = new Tictactoe(boardSize)
    getGameState()
  }, [])

  const [turnText, setTurnText] = useState()
  const [roundText, setRoundText] = useState()
  const [board, setBoard] = useState([])

  function boxClicked(e) {
    const id = e.target.id
    const x = id[0]
    const y = id[1]
    if (!gameOver) { // if game over dont need to getGameState anymore
      TTT.move(x, y)
      getGameState()
    }
  }

  function getGameState() {
    const player = TTT.getPlayer()
    const round = TTT.getRound()
    const winner = TTT.getWinner()
    setBoard(TTT.getBoard)
    switch (winner) {
      case false:
        setTurnText(`${player}'s turn`)
        gameOver = false
        break
      case 'draw':
        setTurnText('Draw!')
        gameOver = true
        break
      default:
        setTurnText(`${winner} wins!`)
        gameOver = true
        break
    }
    setRoundText(`round: ${round}`)
  }

  function restart() {
    TTT.restart()
    getGameState()
  }

  function goback(){
    history.goBack()
  }

  return (
    <div>
      <div id='top'>
        <button onClick={goback}>
          <BackSVG id='BackSVG' fill='#ECEFF4' stroke='#ECEFF4' />
        </button>
        <button onClick={restart}>
          <ResetSVG id='ResetSVG' fill='#ECEFF4' stroke='#ECEFF4' />
        </button>
      </div>
      <Board boardSize={boardSize} board={board} onClick={boxClicked} />
      <p>{turnText}</p>
      <p>{roundText}</p>
    </div>
  );
}

export default Game;