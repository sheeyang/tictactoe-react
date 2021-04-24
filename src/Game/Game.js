import './Game.css';
import Tictactoe from './tictactoe'
import Board from './Board'
import { ReactComponent as ResetSVG } from './reset.svg'
import { ReactComponent as BackSVG } from './back.svg'
import { useState, useLayoutEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

var boardSize
var TTT
var gameOver = false

function Game() {
  const history = useHistory() // This is here to allow users to go to the previous page

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  boardSize = query.get('boardsize')

  useLayoutEffect(() => {
    TTT = new Tictactoe(boardSize)
    getGameState()
  }, [boardSize]) // eslint-disable-line react-hooks/exhaustive-deps

  const [turnText, setTurnText] = useState()
  const [roundText, setRoundText] = useState()
  const [board, setBoard] = useState([])

  function boxClicked(e) {
    const id = e.target.id
    const x = id[0]
    const y = id[1]
    if (!gameOver) { // if game over dont need to send data anymore, this is in preparation for when I add multiplayer in the future
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

  function goback() {
    history.push('/home')
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