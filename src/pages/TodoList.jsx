import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addNewTodo } from "../store/slice";

import { Input } from "../components/Input";
import { Todos } from "../components/Todos";

export function TodoList() {
  const textArea = useRef();
  const Dispatch = useDispatch();
  const label = "Add your todos:";
  function ButtonClick() {
    const newItem = textArea.current.getValue();
    Dispatch(addNewTodo(newItem));
    textArea.current.clear();
  }
  return (
    <>
      <h1>Todo list!</h1>
      <div className="todos">
        <Input ref={textArea} label={label} click={ButtonClick} />
        <Todos />
      </div>
    </>
  );
}
