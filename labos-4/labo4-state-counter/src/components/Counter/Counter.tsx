import React, {useState} from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const addCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter((prevCounter) => prevCounter + 1);
    return;
  };

  const subtractCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter((prevCounter) => prevCounter - 1);
    return;
  };

  return (
    <>
      <div className={`${styles.counterbox}`}>
        <button onClick={addCounter} type="button">
          Omhoog
        </button>
        <p
          className={`${counter > 0 && styles.positive} ${
            counter < 0 && styles.negative
          }`}
        >
          Count: {counter}
        </p>
        <button onClick={subtractCounter} type="button">
          Omlaag
        </button>
      </div>
    </>
  );
};

export default Counter;
