import "./App.css";
import ColorSquare from "./components/color-square/ColorSquare";

function App() {
  return (
    <>
      <ColorSquare color="blue" size={100} />
      <ColorSquare color="green" size={75} />
      <ColorSquare color="purple" size={120} />
      <ColorSquare color="orange" size={90} />
      <ColorSquare color="teal" size={65} />
      <ColorSquare color="#FF5733" size={85} />
      <ColorSquare color="gold" size={150} />
      <ColorSquare color="magenta" size={55} />
      <ColorSquare color="black" size={200} />
      <ColorSquare color="lime" size={80} />
    </>
  );
}

export default App;
