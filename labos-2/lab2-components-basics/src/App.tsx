import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
  return (
    <>
      <Header title={"Labo 2"} subtitle={"Basic Components"} />
      <List items={["item 1", "item 2", "item 3"]} />
      <Footer copy={"Super User"} years={"2025"} />
    </>
  );
}

export default App;
