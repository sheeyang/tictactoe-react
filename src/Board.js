import Box from './Box'

function Board(props) {

    var gridSize = ''
    for (var i = 0; i < props.boardSize; i++) {
        gridSize = gridSize.concat(' 6em')
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: gridSize,
            gridTemplateColumns: gridSize
        }}>
            {
                props.board.map((i, x) => (
                    i.map((value, y) => (
                        <Box key={`${x}${y}`} id={`${x}${y}`} value={value} onClick={props.onClick} />
                    ))
                ))
            }
        </div >
    )
}

export default Board
