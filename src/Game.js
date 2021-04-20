import './Game.css';
import TTT from './tictactoe'
import Board from './Board'
import { ReactComponent as Reset } from './reset.svg';
import { useState, useEffect } from 'react'

var boardSize = 3
var ttt = new TTT(boardSize)

function Game(props) {

  useEffect(() => {
    if (props.boardSize) {
      boardSize = props.boardSize
    }
    ttt = new TTT(boardSize)
    check()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const [turnText, setTurnText] = useState()
  const [roundText, setRoundText] = useState()
  const [board, setBoard] = useState(ttt.getBoard())

  function boxClicked(e) {
    const id = e.target.id
    const x = id[0]
    const y = id[1]
    ttt.move(x, y)
    setBoard(ttt.getBoard)
    check()
  }

  function check() {
    const player = ttt.getPlayer()
    const round = ttt.getRound()
    const winner = ttt.getWinner()
    switch (winner) {
      case 'X':
        setTurnText('X wins!')
        break
      case 'O':
        setTurnText('O wins!')
        break
      case 'draw':
        setTurnText('Draw!')
        break
      default:
        setTurnText(`${player}'s turn`)
        break
    }
    setRoundText(`round: ${round}`)
  }

  function restart() {
    ttt.restart()
    check()
  }

  return (
    <div className="App">
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
