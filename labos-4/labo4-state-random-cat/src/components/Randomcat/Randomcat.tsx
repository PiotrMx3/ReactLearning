import {useState} from "react";

interface PositionT {
  top: number;
  left: number;
}

const RandomCat = () => {
  const [showed, setShowed] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionT>({top: 0, left: 0});

  const setRandomNumbers = () => {
    setShowed(true);

    const randomTop = Math.floor(Math.random() * (window.innerHeight - 200));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 200));

    setPosition({
      top: randomTop,
      left: randomLeft,
    });
    return;
  };

  return (
    <div>
      <button onClick={setRandomNumbers} type="button">
        Random Cat
      </button>

      {showed && (
        <img
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            transition: "all 0.7s ease",
          }}
          src="https://cataas.com/cat?width=200&height=200"
          alt="random cat"
        />
      )}
    </div>
  );
};

export default RandomCat;
