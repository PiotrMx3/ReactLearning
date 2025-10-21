import "./App.css";
import SlotMachine from "./components/slotmachine/Slotmachine.tsx";

function App() {


  return (
    <>
        <SlotMachine slots={3}/>
        <SlotMachine slots={4}/>
        <SlotMachine slots={5}/>

    </>
  );
}

export default App;
