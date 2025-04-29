import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useSelector } from "react-redux";

export const Input = forwardRef(({ label, click }, ref) => {
  const textArea = useRef();
  const list = useSelector((state) => state.todo.todos);
  const username = useSelector((state) => state.todo.username);

  async function saveData() {
    const request = await fetch(
      "https://basic-be-default-rtdb.firebaseio.com/" + username + ".json",
      {
        method: "PUT",
        body: JSON.stringify({list}),
      }
    );
    return request;
  }
  
  useImperativeHandle(ref, () => {
    return {
      clear() {
        textArea.current.value = "";
      },
      getValue() {
        return textArea.current.value;
      },
    };
  });

  function saveList() {
    if (username && list) {
      saveData().then();
    }
  }

  function onEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      click();
    }
  }

  return (
    <div className="todo-input">
      <label htmlFor="todo-input">{label}</label>
      <textarea onKeyDown={onEnter} id="todo-input" ref={textArea}></textarea>
      <button onClick={click}>Add</button>
      <div>
        <button onClick={saveList}>Save</button>
      </div>
    </div>
  );
});
