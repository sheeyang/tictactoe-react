import './App.css';
import TTT from './tictactoe.js'
import { ReactComponent as Reset } from './reset.svg';
import { useState, useEffect } from 'react'

const ttt = new TTT()

function App() {
  const [p00, set00] = useState('')
  const [p01, set01] = useState('')
  const [p02, set02] = useState('')
  const [p10, set10] = useState('')
  const [p11, set11] = useState('')
  const [p12, set12] = useState('')
  const [p20, set20] = useState('')
  const [p21, set21] = useState('')
  const [p22, set22] = useState('')

  const [turnText, setTurnText] = useState()
  const [roundText, setRoundText] = useState()

  useEffect(() => {
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
  }, [p00, p01, p02, p10, p11, p12, p20, p21, p22])

  function boxClicked(e) {
    const id = e.target.id

    switch (id) {
      case 'p00':
        set00(ttt.move(0, 0))
        break;
      case 'p01':
        set01(ttt.move(0, 1))
        break;
      case 'p02':
        set02(ttt.move(0, 2))
        break;
      case 'p10':
        set10(ttt.move(1, 0))
        break;
      case 'p11':
        set11(ttt.move(1, 1))
        break;
      case 'p12':
        set12(ttt.move(1, 2))
        break;
      case 'p20':
        set20(ttt.move(2, 0))
        break;
      case 'p21':
        set21(ttt.move(2, 1))
        break;
      case 'p22':
        set22(ttt.move(2, 2))
        break;
      default:
        break;
    }
    console.log(ttt.getBoard())
  }

  function restart() {
    ttt.restart()
    set00('')
    set01('')
    set02('')
    set10('')
    set11('')
    set12('')
    set20('')
    set21('')
    set22('')
  }

  return (
    <div className="App">
      <button id='restartButton' onClick={restart}>
        <Reset id='restart' fill='#ECEFF4' stroke='#ECEFF4' />
      </button>
      <div id="board">
        <button id="p00" onClick={boxClicked}>{p00}</button>
        <button id="p01" onClick={boxClicked}>{p01}</button>
        <button id="p02" onClick={boxClicked}>{p02}</button>
        <button id="p10" onClick={boxClicked}>{p10}</button>
        <button id="p11" onClick={boxClicked}>{p11}</button>
        <button id="p12" onClick={boxClicked}>{p12}</button>
        <button id="p20" onClick={boxClicked}>{p20}</button>
        <button id="p21" onClick={boxClicked}>{p21}</button>
        <button id="p22" onClick={boxClicked}>{p22}</button>
      </div>
      <p>{turnText}</p>
      <p>{roundText}</p>
    </div>
  );
}

export default App;
