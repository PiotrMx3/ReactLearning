// import "./App.css";
import Rainbow from "./components/Rainbow/Rainbow";

function App() {
  return (
    <>
      <Rainbow amount={10} direction="horizontal" />
      <Rainbow amount={20} direction="vertical" />
    </>
  );
}

export default App;
