import type {JSX} from "react";
import "./App.css";

const alphabet = () => {
  const alphabet: JSX.Element[] = [];

  for (let i = 65; i < 91; i++) {
    alphabet.push(
      <img
        id="aplhabetLetter"
        src={`https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${String.fromCharCode(
          i
        )}.png`}
        alt={`Alphabet letter ${String.fromCharCode(i)}`}
        width={50}
        height={50}
      />
    );
  }
  return alphabet;
};

alphabet();

function App() {
  return (
    <>
      <div className="image-container">
        {alphabet().map((item, i) => (
          <button key={i}>{item}</button>
        ))}
      </div>
    </>
  );
}
export default App;
