import {useEffect, useRef, useState} from "react";
import "./App.css";

type TimeoutCallback = () => void;

const useInterval = (d: number, callback: TimeoutCallback) => {
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => saveCallback.current();
    const id = setInterval(tick, d);
    return () => clearInterval(id);
  }, [d]);
};

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [delay, setDelay] = useState(1000);
  const [running, setRunning] = useState(true);

  const refTime = useRef(0);

  const handleDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(e.target.value));
  };

  const handlePauseButton = () => {
    refTime.current = counter;
    setRunning(false);
  };
  const handleResumeButton = () => {
    setCounter(refTime.current);
    setRunning(true);
  };

  const intervalLogic: TimeoutCallback = () => {
    if (running) {
      setCounter((prev) => prev + 1);
    }
  };

  useInterval(delay, () => intervalLogic());

  return (
    <>
      <div>
        <h1>useTimeout</h1>
        <div>
          <p>Counter: {counter}</p>
        </div>

        <div>
          <input
            onChange={(e) => handleDelay(e)}
            value={delay}
            type="number"
            name="number-input"
            id="number-input"
            min="1"
          />
          <button onClick={handlePauseButton} type="button">
            Pause
          </button>
          <button onClick={handleResumeButton} type="button">
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
