import { useRef } from "react";
import { useDispatch } from "react-redux";

import { addNewTodo } from "../store/slice";

import { Input } from "../components/Input";
import { Todos } from "../components/Todos";

export function TodoList() {
  const textArea = useRef();
  const dispatch = useDispatch();
  const label = "Add your todos:";

  function buttonClick() {
    const newItem = textArea.current.getValue();
    if(!newItem) return;
    dispatch(addNewTodo({content: newItem}));
    textArea.current.clear();
  }
  return (
    <>
      <h1>Todo list!</h1>
      <div className="todos">
        <Input ref={textArea} label={label} click={buttonClick} />
        <Todos />
      </div>
    </>
  );
}
