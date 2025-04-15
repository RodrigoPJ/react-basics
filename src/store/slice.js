import { createSlice } from "@reduxjs/toolkit";
import { addTodo, removeTodo } from "./reducers";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addNewTodo: addTodo,
        removeOldTodo: removeTodo
    }
});

export const { addNewTodo, removeOldTodo } = todoSlice.actions;
export default todoSlice.reducer;