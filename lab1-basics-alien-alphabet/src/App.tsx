import "./App.css";

// 65 -> 90

const alphabetArray = Array.from({length: 26}, (_, i) => {
  const value = String.fromCharCode(i + 65);

  return {
    value: (
      <img
        src={`https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${value}.png`}
        alt={`letter ${value}`}
      />
    ),
    id: crypto.randomUUID(),
  };
});

function App() {
  return (
    <>
      {alphabetArray.map((el) => (
        <button key={el.id}>{el.value}</button>
      ))}
    </>
  );
}

export default App;
