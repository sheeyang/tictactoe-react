const board = []
var winner = false
var round = 0
var player = 'X'
const n = 3 // the number of rows and columns in case I want to expand the game in the future
const maxRounds = Math.pow(n, 2)

export default class TTT {
    constructor() {
        for (let x = 0; x < n; x++) { // create the 2d board
            board[x] = []
            for (let y = 0; y < n; y++) {
                board[x][y] = ''
            }
        }
    }

    move(x, y) {
        if (board[x][y] === '' && winner === false) {
            player = (round % 2) ? "O" : "X"
            board[x][y] = player
            round++
            check(x, y)
            var ret = player // return current player and not the next one
            player = (round % 2) ? "O" : "X"
            return ret
        } else {
            return board[x][y]
        }
    }

    restart() {
        winner = false
        round = 0
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
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

function check(x, y) {
    for (let i = 0; i < n; i++) { // check col
        if (board[x][i] !== player)
            break
        if (i === n - 1) {
            gameOver(0)
            return
        }
    }
    for (let i = 0; i < n; i++) { // check row
        if (board[i][y] !== player)
            break
        if (i === n - 1) {
            gameOver(0)
            return
        }
    }
    if (x === y) { // check diag
        for (let i = 0; i < n; i++) {
            if (board[i][i] !== player)
                break
            if (i === n - 1) {
                gameOver(0)
                return
            }
        }
    }
    if (x + y === n - 1) { //check anti diag
        for (let i = 0; i < n; i++) {
            if (board[i][(n - 1) - i] !== player)
                break
            if (i === n - 1) {
                gameOver(0)
                return
            }
        }
    }
    if (round === maxRounds) {
        gameOver(1)
        return
    }
}

function gameOver(condition) {
    if (condition === 0) {
        console.log(player)
        winner = player
    }
    if (condition === 1) {
        winner = 'draw'
    }
}