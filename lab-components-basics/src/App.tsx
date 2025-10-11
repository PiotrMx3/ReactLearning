import Header from "./components/header/Header";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";
// import "./App.css";

function App() {
  return (
    <>
      <Header title="Labo1" subtitle="Basic components" />
      <List listArray={["1", "2", "3"]} />
      <Footer copy="PiotrM" year={new Date()} />
    </>
  );
}

export default App;
