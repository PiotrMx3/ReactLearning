import {useState} from "react";

const ColorSqure = () => {
  const color = ["red", "blue", "green"];

  const [background, setBackground] = useState(0);
  const [emotion, setEmotion] = useState(":)");
  const [name, setName] = useState("Joske");
  const [newName, setNewName] = useState(name);
  const [round, setRound] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <p>
        <b>{name}</b>
      </p>
      <div
        onClick={() =>
          setBackground((prev) => {
            if (prev === 2) {
              return (prev = 0);
            } else {
              return prev + 1;
            }
          })
        }
        className="square"
        style={{
          backgroundColor: color[background],
          height: 100,
          width: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: round ? "50px" : "",
        }}
      >
        <p style={{fontWeight: "bold", fontSize: "30px"}}>{emotion}</p>
      </div>
      <div>
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          type="text"
          name="name-field"
          id="name-field"
        />
        <button
          onClick={() => {
            setName("Joske");
            setNewName("Joske");
          }}
          type="button"
        >
          Reset Name
        </button>
        <button onClick={() => setName(newName)} type="button">
          Set
        </button>
      </div>
      <div>
        <select
          onChange={(e) => setEmotion(e.target.value)}
          name="opt"
          id="opt"
        >
          <option value=":)">{":)"}</option>
          <option value=":|">{":|"}</option>
          <option value=":(">{":("}</option>
        </select>
      </div>
      <div>
        <label htmlFor="round">
          <input
            onChange={(e) => setRound(e.target.checked)}
            type="checkbox"
            name="round"
            id="round"
          />
          Square
        </label>
      </div>
    </div>
  );
};

export default ColorSqure;
