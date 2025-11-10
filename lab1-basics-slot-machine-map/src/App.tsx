import "./App.css";
import {
  cherry,
  lemon,
  plum,
  seven,
  watermelon,
} from "../src/assets/images/images";

const AMOUNT_SLOTS = 5;

const slotArray = Array.from({length: AMOUNT_SLOTS}, () => {
  return {
    value: Math.floor(Math.random() * 5),
    id: crypto.randomUUID(),
  };
});

const imagesArray = [cherry, lemon, plum, seven, watermelon];

const isWinning = slotArray.every((el) => el.value === slotArray[0].value);

const myStyle = {
  height: "10rem",
  width: "10rem",
};

function App() {
  return (
    <>
      <h1>Labo 1: Slots</h1>

      <img style={myStyle} src={cherry} alt="cherry image" />
      <img style={myStyle} src={lemon} alt="lemon image" />
      <img style={myStyle} src={plum} alt="plum image" />
      <img style={myStyle} src={seven} alt="seven image" />
      <img style={myStyle} src={watermelon} alt="watermelon image" />

      {isWinning ? <h2>Je hebt gewonnen</h2> : <h2>Je hebt verloren</h2>}

      {slotArray.map((el, i) => (
        <img
          style={myStyle}
          key={el.id}
          src={imagesArray[el.value]}
          alt={`Slot${i}`}
        />
      ))}
    </>
  );
}

export default App;
