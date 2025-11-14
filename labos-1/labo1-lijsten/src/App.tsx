import "./App.css";

function App() {
  const arr: number[] = [1, 2, 3, 4, 5, 4, 5, 3, 5];

  const students: {id: string; name: string; age: number}[] = [
    {
      id: crypto.randomUUID(),
      name: "Jef",
      age: 20,
    },
    {
      id: crypto.randomUUID(),
      name: "Jan",
      age: 25,
    },
    {
      id: crypto.randomUUID(),
      name: "Joris",
      age: 30,
    },
    {
      id: crypto.randomUUID(),
      name: "Andie",
      age: 35,
    },
    {
      id: crypto.randomUUID(),
      name: "Senne",
      age: 22,
    },
  ];

  return (
    <>
      <h1> Labo 1: Lijsten</h1>
      <h2>Getalenlijst</h2>
      <ul>
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Studentenlijst</h2>
      <ol>
        {students.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>

      <h2>Studentenlijst met J</h2>
      <ol>
        {students
          .filter((item) => item.name[0].toUpperCase() === "J")
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ol>

      <h2>Select</h2>
      <select name="names" id="select-names">
        {students.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
