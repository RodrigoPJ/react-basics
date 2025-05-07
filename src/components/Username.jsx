import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../store/slice";


export function Username() {
 const input = useRef();
 const dispatch = useDispatch();

 function logUserIn() {
  const username = input.current.value;
  dispatch(setUsername(username));
  
 }
  return (
    <>
      <label htmlFor="username">Set your username:</label>
      <input className="m-4" ref={input} type="text" id="username" placeholder="Username"/>
      <button onClick={logUserIn}>Log In</button>
    </>
  );
}
