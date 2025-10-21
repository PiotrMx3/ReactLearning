import './App.css'
import penguins from "./jsonfile/penguins.json"
import {type IPenguin, PenguinCard} from "./components/PenguinCard.tsx";


const data: IPenguin[] = penguins;


function App() {

  return (
    <>
        
        {
            data.filter((el: IPenguin) => el.gender == "Female")
            .map((penguin: IPenguin, index) => (<PenguinCard key={index} penguin={penguin}/>))
        }
    </>
  )
}

export default App
