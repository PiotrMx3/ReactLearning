import {useState} from "react";

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const setArray = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const array = Array.from(e.target.selectedOptions, (item) => item.value);
    setSelectedColors(array);
  };

  return (
    <>
      <select
        onChange={(e) => setArray(e)}
        style={{width: "7rem"}}
        name="colors"
        id="color-select"
        multiple
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
      <button type="button">Show Colors</button>
      <br />
      <br />
      {selectedColors.map((e, i) => {
        return (
          <div
            key={i + e}
            style={{backgroundColor: e, width: 150, height: 50}}
          ></div>
        );
      })}
    </>
  );
};

export default ColorSelect;
