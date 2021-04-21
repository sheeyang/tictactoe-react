import './Game.css';
import Tictactoe from './tictactoe'
import Board from './Board'
import { ReactComponent as Reset } from './reset.svg';
import { useState, useEffect } from 'react'

var boardSize
var TTT
var gameOver = false

function Game(props) {
  useEffect(() => {
    if (props.boardSize) {
      boardSize = props.boardSize
      TTT = new Tictactoe(boardSize)
    }
    getGameState()
  }, [props.boardSize])

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

  return (
    <div>
      <button id='restartButton' onClick={restart}>
        <Reset id='restart' fill='#ECEFF4' stroke='#ECEFF4' />
      </button>
      <Board boardSize={boardSize} board={board} onClick={boxClicked} />
      <p>{turnText}</p>
      <p>{roundText}</p>
    </div>
  );
}

export default Game;