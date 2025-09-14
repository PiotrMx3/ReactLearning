import "./App.css";

import {cherry, lemon, watermelon, plum, seven} from "./assets";

function App() {
  const resetPage = () => {
    return window.location.reload();
  };

  const images = [cherry, lemon, watermelon, plum, seven];

  const slot1 = Math.floor(Math.random() * images.length);
  const slot2 = Math.floor(Math.random() * images.length);
  const slot3 = Math.floor(Math.random() * images.length);

  const isWin = slot1 === slot2 && slot2 === slot3;

  return (
    <>
      <h1 className="left-algin">Labo 1: Slots</h1>

      <div className="container_slot">
        {images.map((src, i) => (
          <img key={i} className="picture_box" src={src} alt={`icon ${i}`} />
        ))}
      </div>
      <div className="msg_box">
        <h2>{isWin ? "Jij hebt gewonnen" : "Jij hebt verloren !"}</h2>
      </div>
      <div className="msg_box container_slot">
        <img
          className="picture_box"
          src={images[slot1]}
          alt={images[slot1] + " picture"}
        />
        <img
          className="picture_box"
          src={images[slot2]}
          alt={images[slot2] + " picture"}
        />
        <img
          className="picture_box"
          src={images[slot3]}
          alt={images[slot3] + " picture"}
        />
      </div>
      <button type="reset" onClick={resetPage}>
        Reset
      </button>
    </>
  );
}

export default App;
