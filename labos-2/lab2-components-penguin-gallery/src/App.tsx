import "./App.css";
import PenguinCard from "./componets/penguinCard/PenguinCard";
import penguins from "./penguins.json";

function App() {
  return (
    <>
      {penguins
        .filter((el) => el.gender.toLowerCase() === "female")
        .map((el) => {
          return (
            <PenguinCard
              key={el.id}
              description={el.description}
              id={el.id}
              image={el.image}
              island={el.island}
              nickname={el.nickname}
            />
          );
        })}
    </>
  );
}

export default App;
