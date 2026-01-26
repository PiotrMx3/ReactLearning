import {useEffect, useState} from "react";

interface TimerProps {
  interval: number;
}

const Timer = ({interval}: TimerProps) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Start nowego interwału:", interval); // Debug, żebyś widział restart

    const handle = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    };
  }, [interval]);

  return <p>Licznik: {number}</p>;
};

const App = () => {
  const [timerInterval, setTimerInterval] = useState(1000);

  return (
    <>
      <div style={{padding: "20px"}}>
        <input
          id="volume" // Dodane ID dla labela
          type="range"
          min="1" // Zmieniłem min na 100, bo 1ms może "zamrozić" przeglądarkę przy renderowaniu
          max="2000"
          value={timerInterval} // POPRAWIONE
          onChange={(e) => setTimerInterval(parseInt(e.target.value))}
        />
        <label htmlFor="volume" style={{marginLeft: "10px"}}>
          Interwał: {timerInterval} ms
        </label>
      </div>
      <Timer interval={timerInterval} />
    </>
  );
};

export default App;
