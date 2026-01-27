import {useEffect, useState} from "react";

const Timer = () => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{timer}</h1>
    </>
  );
};

export default Timer;
