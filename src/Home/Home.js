import './Home.css'
import { useState } from 'react'


function Home(props) {

    const [boardSize, setBoardSize] = useState(3)
    const [error, setError] = useState()

    function handleBoardSize(e) {
        setBoardSize(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (boardSize < 3) {
            setError('That is too small, min 3')
        } else if (boardSize > 10) {
            setError('That is too big, max 9')
        } else if (isNaN(boardSize)) {
            setError('That is not a number')
        } else {
            props.onSubmitCallback(boardSize)
        }
    }

    return (
        <form id='home' onSubmit={handleSubmit}>
            <div>
                <h1>TicTacToe</h1>
                <p id='github'>Check it out on <a href={"https://github.com/sheeyang/tictactoe-react"}>Github</a></p>
            </div>
            <input className='text' type="text" onChange={handleBoardSize} placeholder="Board size" />
            <input id='submit' type="submit" value="Play!" />
            {error
                ? <p id='error'>{error}</p>
                : <></>
            }
        </form>
    )
}

export default Home
