import { useState, useRef, useEffect, useCallback  } from "react";
import { useInterval } from "../utils/useInterval";

export function StopLights() {
  const [light, setLight] = useState("green");
  const [timer, setTimer] = useState(false);
  const interval = useRef();
  const savedCb = useRef();

  useEffect(()=>{
    savedCb.current = function lightChange() {
    if (light === "yellow") setLight("red");
    else if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
  };
  });

  useEffect(()=>{
    function lights() {
      savedCb.current();
    }
    
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    } else if(!interval.current && timer)
    {
      interval.current = setInterval(lights, 1000);
      return ()=> clearInterval(interval.current);
    }
  }, [timer])

  

  function startStopTimer() {
    setTimer((state) => !state);
  }
  return (
    <>
      <div className="stop-light-button">
        <button onClick={startStopTimer}>{timer ? "Stop" : "Start"}</button>
      </div>
      <div className="stop-light">
        <div
          className="bulb"
          style={light === "green" ? { backgroundColor: light } : {}}
        ></div>
        <div
          className="bulb"
          style={light === "yellow" ? { backgroundColor: light } : {}}
        ></div>
        <div
          className="bulb"
          style={light === "red" ? { backgroundColor: light } : {}}
        ></div>
      </div>
    </>
  );
}
