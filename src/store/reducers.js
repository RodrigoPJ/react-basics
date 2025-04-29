import { initialBoard } from "../utils/board";

export function setTodoReducer(state, action) {
  state.todos = action.payload;
}

export function addTodo(state, action) {
  state.todos.push(action.payload);
}

export function removeTodo(state, action) {
  state.todos.splice(action.payload,1)
}

export function editTodoReducer (state, action) {  
  const { index, content, isEditing } = action.payload;
  state.todos[index] = {content, isEditing};
}

export function setBoard(state, action) {
  const {r, c, player }  = action.payload;  
  state.board[r][c] = player;
}

export function resetBoard(state) {  
  state.board = initialBoard;
}

export function assignPlayerReducer(state, action) {
  const { symbol, name } = action.payload;
  state.players[symbol] = name;
}

export function resetPlayersReducer(state) {
  state.players = {};
}

export function addMoveToLedgerReducer (state, action) {
  state.movesLedger.push(action.payload);
}

export function resetMovesLedgerReducer(state) {
  state.movesLedger = [];
}

export function setTurnReducer(state) {
  const player = state.turn;
  if (player === "X") {
    state.turn = "O";
  } else {
    state.turn = "X";
  }
}

export function resetTurnReducer(state) {
  state.turn = "X";
}

export function usernameReducer(state, action) {
  state.username = action.payload;
}
