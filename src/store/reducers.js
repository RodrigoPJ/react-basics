export function addTodo(state, action) {    
    state.todos.push(action.payload);
}

export function removeTodo(state, action) {
    state.todos.splice(action.payload,1)
}
