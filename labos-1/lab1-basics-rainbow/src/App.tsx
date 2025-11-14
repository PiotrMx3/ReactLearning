import "./App.css";

const colors = Array.from(
  {length: 100},
  (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`
);

console.log(colors);
function App() {
  return (
    <>
      {colors.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: `${el}`,
              display: "flex",
              flexDirection: "column-reverse",
            }}
          ></div>
        );
      })}
    </>
  );
}

export default App;
