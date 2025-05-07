import { useRef, useEffect } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  const intervalId = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
      return () => clearInterval(intervalId.current);
    }
  }, [delay]);
  return intervalId.current;
}
