var board = []
var winner = false
var round = 0
var player = 'X'

export default class Tictactoe {
    constructor(boardSize) {
        this.restart()
        this.boardSize = boardSize
        this.maxRounds = Math.pow(boardSize, 2)
        for (let x = 0; x < boardSize; x++) { // create the 2d board
            board[x] = []
            for (let y = 0; y < boardSize; y++) {
                board[x][y] = ''
            }
        }
    }

    move(x, y) {
        if (board[x][y] === '' && winner === false) {
            player = (round % 2) ? "O" : "X"
            board[x][y] = player
            round++
            this.check(x, y)

            var ret = player // return current player and not the next one

            player = (round % 2) ? "O" : "X"
            return ret
        } else {
            return board[x][y]
        }
    }
    check(x, y) {
        for (let i = 0; i < this.boardSize; i++) { // check col
            if (board[x][i] !== player)
                break
            if (i === this.boardSize - 1) {
                winner = player
                return
            }
        }
        for (let i = 0; i < this.boardSize; i++) { // check row
            if (board[i][y] !== player)
                break
            if (i === this.boardSize - 1) {
                winner = player
                return
            }
        }
        if (x === y) { // check diag
            for (let i = 0; i < this.boardSize; i++) {
                if (board[i][i] !== player)
                    break
                if (i === this.boardSize - 1) {
                    winner = player
                    return
                }
            }
        }
        if (x + y === this.boardSize - 1) { //check anti diag
            for (let i = 0; i < this.boardSize; i++) {
                if (board[i][(this.boardSize - 1) - i] !== player)
                    break
                if (i === this.boardSize - 1) {
                    winner = player
                    return
                }
            }
        }
        if (round === this.maxRounds) {
            winner = 'draw'
            return
        }
    }

    restart() {
        winner = false
        round = 0
        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                board[x][y] = ''
            }
        }
    }

    getBoard() {
        return board
    }
    getPlayer() {
        return player
    }
    getRound() {
        return round
    }
    getWinner() {
        return winner
    }
}