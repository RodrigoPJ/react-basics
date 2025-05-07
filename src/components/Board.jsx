import { useSelector, useDispatch } from 'react-redux';
import { setNewBoard, startNewBoard, addMoveToLedger, resetMovesLedger, setTurn, resetTurn, resetPlayers } from '../store/slice';
import { useCallback } from 'react';

export function Board({ winner }) {
  const board = useSelector(state => state.todo.board);
  const turn = useSelector(state => state.todo.turn)
  const dispatch = useDispatch();

  function playerTurn(r, c) {
    const player = turn;
    dispatch(setNewBoard({r,c,player}));
    dispatch(addMoveToLedger(`Player: ${player}, move:${r}, ${c}`));
    dispatch(setTurn());
  }

  function reset() {
    dispatch(startNewBoard());
    dispatch(resetMovesLedger());
    dispatch(resetTurn());
    dispatch(resetPlayers());
  }

  const buttonBoardStyle = useCallback((rowIndex, colIndex) => {
    console.log('callback executed');
    
    const style = {};
    if (rowIndex === 0){
      style.borderTopStyle = 'hidden';
    } if ( rowIndex === 2){
      style.borderBottomStyle = 'hidden';
    } if ( colIndex === 0){
      style.borderLeftStyle = 'hidden';
    } if ( colIndex === 2){
      style.borderRightStyle = 'hidden';
    }
    return style;
  });

  return (
    <>
      <p className="center">
          <button onClick={reset}>Reset</button>
      </p>
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <ul key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => playerTurn(rowIndex, colIndex)}
                      className="tic-button"
                      disabled={col || winner}
                      style={buttonBoardStyle(rowIndex, colIndex)}
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
    </>
  );
}
