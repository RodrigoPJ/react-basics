import { useState } from "react";
import { Users } from "../components/Users";
import { Board } from "../components/Board";

export function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [ledger, addToLedger] = useState([]);
  const [users, setUsers] = useState({});
  return (
    <>
      <h1>Tic Tac Toe!</h1>
      <Users users={users} setUsers={setUsers} activeTurn={turn} />
      <div className="d-flex">
        <Board
          turn={turn}
          setTurn={setTurn}
          setUsers={setUsers}
          addMove={addToLedger}
        />
        <ol>
          {ledger.map((entry, i) => {
            return <li key={i}>{entry}</li>;
          })}
        </ol>
      </div>
    </>
  );
}
