import React, {useState} from "react";

const ButtonList = () => {
  const [numberArray, setNumberArray] = useState<number[]>([]);

  const som = numberArray.reduce((a, c) => a + c, 0);

  const addNumber = (index: number) => {
    setNumberArray((prev) => {
      const copy = [...prev];
      copy[index] += 1;

      return copy;
    });
  };

  const substringNumber = (index: number) => {
    setNumberArray((prev) => {
      const copy = [...prev];
      copy[index] -= 1;

      return copy;
    });
  };

  const addCounter = () => {
    setNumberArray((prev) => [...prev, 0]);
  };

  return (
    <>
      <p>Som van de tellers: {som}</p>
      {numberArray.map((el, i) => {
        return (
          <React.Fragment key={el + "-" + i}>
            <div style={{display: "flex", gap: "2rem"}}>
              <button onClick={() => substringNumber(i)}>Omlaag</button>
              <p>Coutn: {numberArray[i]}</p>
              <button onClick={() => addNumber(i)}>Omhoog</button>
            </div>
            <br />
          </React.Fragment>
        );
      })}
      <button onClick={addCounter}>Voeg teller toe</button>
    </>
  );
};

export default ButtonList;
