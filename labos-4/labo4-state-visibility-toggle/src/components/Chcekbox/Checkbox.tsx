import {useState} from "react";

const Checkbox = () => {
  const [showElement, setShowElement] = useState<boolean>(false);
  return (
    <>
      <div>
        <input
          onChange={(e) => setShowElement(e.target.checked)}
          type="checkbox"
          name="checkbox"
          id="show-hide-box"
        />
        <label htmlFor="show-hide-box"> Show/Hide</label>
        {showElement && (
          <div
            style={{
              border: "1px solid black",
              height: 400,
              padding: 5,
              backgroundRepeat: "repeat",
              backgroundImage:
                "url('https://media1.tenor.com/m/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif')",
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Checkbox;
