import "./App.css";

const array = [1, 2, 3, 4, 5, 4, 3, 3];

const arrayParser = array.map((el, i) => {
  return {
    value: el,
    id: i,
  };
});

interface Student {
  id: number;
  name: string;
  age: number;
}

const studentsArray: Student[] = [
  {
    id: 1,
    name: "Jef",
    age: 20,
  },
  {
    id: 2,
    name: "Jan",
    age: 21,
  },
  {
    id: 3,
    name: "Joris",
    age: 22,
  },
  {
    id: 4,
    name: "Andie",
    age: 23,
  },
  {
    id: 5,
    name: "Senne",
    age: 24,
  },
];

function App() {
  return (
    <>
      <h1>Labo 1: Lijsten</h1>

      <h2>Getallenlijst</h2>
      <ul>
        {arrayParser.map((el) => (
          <li key={el.id}>{el.value}</li>
        ))}
      </ul>

      <h2>Studentenlijst</h2>
      <ol>
        {studentsArray.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ol>

      <h2>Studentenlijst met J</h2>
      <ol>
        {studentsArray
          .filter((el) => el.name.startsWith("J"))
          .map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
      </ol>

      <h2>Select</h2>
      <select name="selected-student" id="select-students">
        {studentsArray.map((el) => (
          <option key={el.id} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>

      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Leeftijd</th>
          </tr>
        </thead>
        <tbody>
          {studentsArray.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.age}</td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
}

export default App;
