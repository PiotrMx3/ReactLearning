import "./App.css";

import {cherry, lemon, watermelon, plum, seven} from "./assets";

const AMOUNT_SLOTS = 3;
const images = [cherry, lemon, watermelon, plum, seven];

const fillArray = (numberOfSlots: number) => {
  const arr: number[] = [];

  for (let i = 0; i < numberOfSlots; i++) {
    arr.push(Math.floor(Math.random() * 5));
  }

  return arr;
};

const resetPage = () => {
  window.location.reload();
  return;
};

function App() {
  const slots = fillArray(AMOUNT_SLOTS);
  const winning = slots.every((item) => item === slots[0]);

  return (
    <>
      <h1 className="left-algin">Labo 1: Slots</h1>

      <div className="container_slot">
        {images.map((src, i) => (
          <img key={i} className="picture_box" src={src} alt={`icon ${i}`} />
        ))}
      </div>
      <div className="msg_box">
        <h2>{winning ? "Jij hebt gewonnen" : "Jij hebt verloren !"}</h2>
      </div>

      <div className="msg_box container_slot">
        {slots.map((slot, i) => (
          <img
            key={i}
            className="picture_box"
            src={images[slot]}
            alt={images[slot] + " picture"}
          />
        ))}
      </div>

      <button type="reset" onClick={resetPage}>
        Reset
      </button>
    </>
  );
}

export default App;
