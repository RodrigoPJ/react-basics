import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { Users } from "../components/Users";
import { Board } from "../components/Board";

import { isWinner } from "../utils/board";

export function TicTacToe() {
  const [winner, setWinner] = useState("")
  const board = useSelector(state => state.todo.board);
  const ledger = useSelector(state => state.todo.movesLedger);
  const turn = useSelector(state => state.todo.turn);  
  
  useEffect(()=>{
    const winner = isWinner(board);    
    setWinner(winner)
  }, [board]);

  return (
    <div className="d-flex center-tic">
      <h1>Tic Tac Toe!</h1>
      <Users winner={winner} activeTurn={turn} />
      <Board
        winner={winner}
      />
      <ol>
        {ledger.map((entry, i) => {
          return <li key={i}>{entry}</li>;
        })}
      </ol>
    </div>
  );
}
