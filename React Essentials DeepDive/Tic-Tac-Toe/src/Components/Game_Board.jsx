import React, { useState } from 'react'
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function Game_Board({onSelect,ActivePlayerSymbol}) {

  const [GameBoard, SetGameBoard] = useState(initialGameBoard);

  function HandleStateSquare(rowIndex, colIndex) {
    SetGameBoard((prevBoard) => {
      const UpdatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      UpdatedBoard[rowIndex][colIndex] = ActivePlayerSymbol;
      return UpdatedBoard;
      
    })
onSelect()
  }
  return (
    <ol id='game-board'>
      {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((PlayerSymbol, colIndex) => <li key={colIndex}><button onClick={() => HandleStateSquare(rowIndex, colIndex)}>{PlayerSymbol}</button></li>)}
        </ol>
      </li>)}
    </ol>
  )
}

export default Game_Board
