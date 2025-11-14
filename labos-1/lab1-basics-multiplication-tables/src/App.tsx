import type {JSX} from "react";
import "./App.css";

const multiplicationTable: JSX.Element[][] = [];

for (let i = 1; i < 11; i++) {
  const row: JSX.Element[] = [];

  for (let j = 1; j < 11; j++) {
    row.push(<td key={`${i}-${j}`}>{j * i}</td>);
  }
  multiplicationTable.push(row);
}

console.log(multiplicationTable);

function App() {
  return (
    <>
      <table>
        <tbody>
          {multiplicationTable.map((el, index) => (
            <tr key={index}>{el}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
