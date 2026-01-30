import {useState} from "react";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [limit, setLimit] = useState<number>(0);
  const [componentLimit, setComponentLimit] = useState(151);

  const handleLimit = () => {
    setComponentLimit(limit);
  };

  return (
    <>
      <Pokedex limit={componentLimit} />
      <input
        onChange={(e) => setLimit(Number(e.target.value))}
        type="number"
        name="limit"
        id="limit"
      />
      <button onClick={handleLimit} type="button">
        Set Limit
      </button>
    </>
  );
}

export default App;
