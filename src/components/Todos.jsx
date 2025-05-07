import { useSelector, useDispatch } from "react-redux";
import { removeOldTodo, editTodo, setTodoList } from "../store/slice";
import { useEffect, useState } from "react";

export function Todos() {
  const [editValue, setEditValue] = useState([]);
  const todoList = useSelector((state) => state.todo.todos);
  const username = useSelector((state) => state.todo.username);
  const dispatch = useDispatch();

  useEffect(()=>{
    async function getTodoList() {
      const response = await fetch("https://basic-be-ec0e8-default-rtdb.firebaseio.com/" + username + ".json" , {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('No list found for that user!')
      }
      const user = await response.json();
      if (user) return user.list;
      return [];
      
    }
    if (username && todoList.length === 0) {
        getTodoList().then(data => {
          if(data) {
            dispatch(setTodoList(data));
          }
        }).catch(e => console.log(e));
      }
  }, []);
  

  function removeTodo(i) {
    dispatch(removeOldTodo(i));
  }

  function setInputValue (val, index) {
    setEditValue(state => {
      const newState = [...state];
      newState[index] = val;
      return newState;
    });
  }

  function editATodo(index) {
    dispatch(
      editTodo({
        index,
        content: editValue[index],
        isEditing: false,
      })
    );
  }

  function startEditingATodo(index) {
    dispatch(
      editTodo({
        index,
        content: todoList[index].content,
        isEditing: true,
      })
    );
  }

  return (
    <ol>
      {todoList.map((item, index) => {
        return (
          <li className="todo-item" key={index}>
            {!item.isEditing && <span>{item.content}</span>}
            {item.isEditing && (
              <input type="text" defaultValue={item.content} onChange={(e) => setInputValue(e.target.value, index)} />
            )}
            {!item.isEditing && (
              <>
                <button onClick={() => removeTodo(index)}>Remove</button>
                <button onClick={() => startEditingATodo(index)}>Edit</button>
              </>
            )}
            {item.isEditing && <button onClick={()=> editATodo(index)}>Save Edit</button>}
          </li>
        );
      })}
    </ol>
  );
}
