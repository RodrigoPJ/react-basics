import { useSelector, useDispatch } from 'react-redux';
import { removeOldTodo } from '../store/slice';


export function Todos() {
    const todoList = useSelector(state => state.todo.todos);    
    const dispatch = useDispatch()
    function removeTodo(i) {
        dispatch(removeOldTodo(i))
    }
    return (
        <ol>
            {todoList.map((item, index) => {
                return (
                    <li className='todo-item' key={index}>
                        <span>{item}</span>
                        <button onClick={() => removeTodo(index)}> Remove </button>
                    </li>
                )
            })}
        </ol>
    )
}