import "./App.css";
import {
  cherry,
  lemon,
  plum,
  seven,
  watermelon,
} from "../src/assets/images/images";

const slot1 = Math.floor(Math.random() * 5);
const slot2 = Math.floor(Math.random() * 5);
const slot3 = Math.floor(Math.random() * 5);

const imagesArray = [cherry, lemon, plum, seven, watermelon];

const isWinning = slot1 === slot2 && slot1 === slot3;

const myStyle = {
  height: "10rem",
  width: "10rem",
};

function App() {
  return (
    <>
      <h1>Labo 1: Slots</h1>

      <img style={myStyle} src="/cherry.png" alt="cherry image" />
      <img style={myStyle} src="/lemon.png" alt="lemon image" />
      <img style={myStyle} src="/plum.png" alt="plum image" />
      <img style={myStyle} src="/seven.png" alt="seven image" />
      <img style={myStyle} src="/watermelon.png" alt="watermelon image" />

      {isWinning ? <h2>Je hebt gewonnen</h2> : <h2>Je hebt verloren</h2>}

      <img style={myStyle} src={imagesArray[slot1]} alt="slot1 image" />
      <img style={myStyle} src={imagesArray[slot2]} alt="slot2 image" />
      <img style={myStyle} src={imagesArray[slot3]} alt="slot3 image" />
    </>
  );
}

export default App;
