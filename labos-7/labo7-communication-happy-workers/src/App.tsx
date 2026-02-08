import {useState} from "react";
import "./App.css";
import Square from "./components/Square/Square";

function App() {
  const [work, setWork] = useState<number>(0);

  const setProgress = () =>
    setWork((prev) => {
      if (prev >= 100) return prev;
      return prev + 1;
    });

  return (
    <>
      <progress id="file" value={work} max="100"></progress>
      <div style={{display: "flex", gap: "0.2rem"}}>
        <Square
          color={"red"}
          size={"100px"}
          setProgress={setProgress}
          workProgress={work}
        />
        <Square
          color={"green"}
          size={"100px"}
          setProgress={setProgress}
          workProgress={work}
        />
        <Square
          color={"yellow"}
          size={"100px"}
          setProgress={setProgress}
          workProgress={work}
        />
      </div>
      <p>Work done: {work}%</p>
    </>
  );
}

export default App;
