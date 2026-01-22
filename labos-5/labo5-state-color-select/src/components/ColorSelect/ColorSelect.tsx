import {useState} from "react";

const ColorSelect = () => {
  const [colorArray, setColorArray] = useState<string[]>([]);
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [colorArrayToShow, setColorArrayToShow] = useState<string[]>([]);

  const setArray = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const array = Array.from(e.target.selectedOptions, (item) => item.value);
    setColorArray(array);
  };

  const showArrayColors = () => {
    setIsShowed(true);
    setColorArrayToShow([...colorArray]);
  };

  const changeColorUserDefinde = (itemColor: string, n: number) => {
    const newColor = prompt("Make a Choice:", itemColor);

    const tempArray = [...colorArrayToShow];

    if (newColor === "" || newColor === null) return alert("Wrong Value !");

    if (
      [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
      ].includes(newColor)
    ) {
      tempArray[n] = newColor;
      setColorArrayToShow(tempArray);
    }
  };

  return (
    <>
      <select
        style={{width: 100, height: 140}}
        name="multiple-colors"
        id="multiple-colors"
        multiple
        onChange={(e) => setArray(e)}
      >
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <br />
      <br />
      <button onClick={() => showArrayColors()} type="button">
        {isShowed ? "Reset Colors" : "Show Colors"}
      </button>
      <br />
      <br />
      {isShowed &&
        colorArrayToShow.map((el, i) => {
          return (
            <div
              key={i + el}
              onClick={() => changeColorUserDefinde(el, i)}
              style={{background: el, width: "150px", height: "25px"}}
            ></div>
          );
        })}
    </>
  );
};

export default ColorSelect;
