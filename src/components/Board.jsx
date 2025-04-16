import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function Board({ turn, setTurn, addMove, setUsers }) {
  const [board, setBoard] = useState(initialBoard);

  function playerTurn(r, c) {
    console.log(r, c);
    setBoard((state) => {
      const newState = [...state.map((e) => [...e])];
      const player = turn;
      newState[r][c] = player;
      return newState;
    });
    setTurn((state) => {
      if (state === "X") {
        return "O";
      } else {
        return "X";
      }
    });
    addMove((state) => {
      const newState = [...state];
      newState.push(`${r}, ${c}`);
      return newState;
    });
  }

  function reset() {
    setBoard(initialBoard);
    addMove([]);
    setTurn("X");
    setUsers({});
  }
  return (
    <div className="board">
      <p className="center">
        <button onClick={reset}>Reset</button>
      </p>
      {board.map((row, rowIndex) => {
        return (
          <ul key={rowIndex}>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => playerTurn(rowIndex, colIndex)}
                    className="tic-button"
                  >
                    {col}
                  </button>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
