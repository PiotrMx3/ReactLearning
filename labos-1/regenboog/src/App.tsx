import "./App.css";

const colors = Array.from(
  {length: 100},
  (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`
);

function App() {
  return (
    <>
      {colors.map((item, i) => (
        <div
          style={{width: "100%", height: "4px", backgroundColor: `${item}`}}
        ></div>
      ))}
    </>
  );
}

export default App;
