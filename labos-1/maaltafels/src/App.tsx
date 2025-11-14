import type {JSX} from "react";
import "./App.css";

const table: JSX.Element[][] = [];

for (let i = 1; i < 11; i++) {
  const tr: JSX.Element[] = [];

  for (let j = 1; j < 11; j++) {
    tr.push(<td key={`cell-${i}-${j}`}>{i * j}</td>);
  }
  table.push(tr);
}

function App() {
  return (
    <>
      <table className="multiplication-table">
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>{row}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
