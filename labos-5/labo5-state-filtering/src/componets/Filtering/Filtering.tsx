import {useState} from "react";

interface Student {
  id: number;
  name: string;
  age: number;
  year: number;
}

const ALL_STUDENTEN: Student[] = [
  {id: 1, name: "Daan", age: 20, year: 2},
  {id: 2, name: "Sophie", age: 22, year: 3},
  {id: 3, name: "Thijs", age: 19, year: 1},
  {id: 4, name: "Lotte", age: 21, year: 2},
  {id: 5, name: "Jesse", age: 23, year: 4},
  {id: 6, name: "Eva", age: 20, year: 2},
  {id: 7, name: "Bram", age: 18, year: 1},
  {id: 8, name: "Emma", age: 22, year: 3},
  {id: 9, name: "Lucas", age: 24, year: 4},
  {id: 10, name: "Julia", age: 19, year: 1},
];

const Filtering = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [sortField, setSortField] = useState<string>("nameUp");

  const filtred = [...ALL_STUDENTEN].filter((el) =>
    el.name.toUpperCase().includes(searchText.toUpperCase()),
  );

  let sortedArray = filtred;

  switch (sortField) {
    case "nameUp":
      sortedArray = filtred.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameDown":
      sortedArray = filtred.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "ageUp":
      sortedArray = filtred.sort((a, b) => a.age - b.age);
      break;
    case "ageDown":
      sortedArray = filtred.sort((a, b) => b.age - a.age);
      break;

    case "year":
      sortedArray = filtred.sort((a, b) => a.year - b.year);
      break;
  }

  return (
    <div
      style={{width: "20rem", minHeight: "20rem", border: "red, dashed, 2px"}}
      className="container-box"
    >
      <label htmlFor="search">Search: </label>
      <input
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
        type="text"
        name="search"
        id="search"
      />
      <table>
        <thead>
          <tr>
            <th
              onClick={() =>
                setSortField((prev) =>
                  prev === "nameUp" ? "nameDown" : "nameUp",
                )
              }
            >
              {sortField === "nameUp" ? "Name ↑" : "Name ↓"}
            </th>
            <th
              onClick={() =>
                setSortField((prev) => (prev === "ageUp" ? "ageDown" : "ageUp"))
              }
            >
              {sortField === "ageUp" ? "Age ↑" : "Age ↓"}
            </th>
            <th onClick={() => setSortField("year")}>
              {sortField === "year" ? "Year ↑" : "Year"}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.age}</td>
                <td>{el.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Filtering;
