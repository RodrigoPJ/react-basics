import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  setBoard,
  resetBoard,
  assignPlayerReducer,
  resetPlayersReducer,
  addMoveToLedgerReducer,
  resetMovesLedgerReducer,
  setTurnReducer,
  resetTurnReducer,
  editTodoReducer,
  usernameReducer,
  setTodoReducer,
} from "./reducers";
import { initialBoard } from "../utils/board";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
    board: initialBoard,
    players: {},
    movesLedger: [],
    turn: "X",
    username:"",
  },
  reducers: {
    addNewTodo: addTodo,
    removeOldTodo: removeTodo,
    editTodo: editTodoReducer,
    setNewBoard: setBoard,
    startNewBoard: resetBoard,
    assignPlayer: assignPlayerReducer,
    resetPlayers: resetPlayersReducer,
    addMoveToLedger: addMoveToLedgerReducer,
    resetMovesLedger: resetMovesLedgerReducer,
    setTurn: setTurnReducer,
    resetTurn: resetTurnReducer,
    setUsername: usernameReducer,
    setTodoList: setTodoReducer
  },
});

export const {
  addNewTodo,
  removeOldTodo,
  editTodo,
  setNewBoard,
  startNewBoard,
  assignPlayer,
  addMoveToLedger,
  resetMovesLedger,
  setTurn,
  resetTurn,
  resetPlayers,
  setUsername,
  setTodoList,
} = todoSlice.actions;
export default todoSlice.reducer;
