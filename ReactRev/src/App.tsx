import "./App.css";
import {useState} from "react";
// import {use, useState, type FormEvent, type SetStateAction} from "react";

// const user1 = {
//   name: "Jan",
//   address: {
//     city: "Kraków",
//   },
// };
// const user2 = structuredClone(user1);

// user2.address.city = "Warszawa";

// console.log(user1, user2);

// const productA = {
//   name: "Laptop",
//   details: {
//     price: 4000,
//     warranty: "2 lata",
//   },
// };

// const productB = {
//   name: "Myszka",
//   details: null, // Brak szczegółów
// };

// console.log(productA?.details?.warranty);
// console.log(productB?.details?.warranty);

// const users = [
//   {id: 1, name: "Alice", role: "admin"},
//   {id: 2, name: "Bob"},
// ];

// // renaming with :

// const [{name: firstUserName}, {role: secondUserRole = "Guest"}] = users;

// console.log(firstUserName);
// console.log(secondUserRole);

// const sum = (a: number, b: number, callback: (sum: number) => void) => {
//   const result = a + b;
//   callback(result); // "Oddzwania" z wynikiem
// };

// const displayAlert = (sum: number): void => {
//   alert("Som is: " + sum);
// };

// sum(5, 10, displayAlert);

// interface Character {
//   name: string;
//   age: number;
// }

// const characters: Character[] = [
//   {name: "Jinx", age: 16},
//   {name: "Caitlyn", age: 24},
//   {name: "Jayce", age: 30},
//   {name: "Victor", age: 30},
//   {name: "Heimerdinger", age: 307},
// ];

// interface InitObj {
//   ageSum: number;
//   chars: Character[];
// }

// const initObj: InitObj = {
//   ageSum: 0,
//   chars: [],
// };

// const age = characters
//   .filter((el) => el.age < 30)
//   .map((el) => el.age)
//   .reduce((sum, current) => sum + current);

// const charsReduce = characters.reduce((accumulator, currentChar) => {
//   if (currentChar.age < 30) {
//     accumulator.ageSum += currentChar.age;
//     accumulator.chars.push(currentChar);
//   }

//   return accumulator;
// }, initObj);

// console.log(age);

// console.log(charsReduce);

// interface Games {
//   [key: string]: number;
// }

// const games: Games = {};

// games["Polska"] = 1;
// games["Niemcy"] = 0;

// const gamesRecord: Record<string, number> = {};

// gamesRecord["Polska"] = 5;
// gamesRecord["Niemcy"] = 2;

// console.log(games);
// console.log(gamesRecord);

// const allTags = [
//   "react",
//   "typescript",
//   "css",
//   "javascript",
//   "react",
//   "tailwind",
//   "css",
//   "typescript",
// ];

// const uniqueSortedTags = Array.from(new Set(allTags)).sort((a, b) =>
//   a.localeCompare(b)
// );
// console.log(uniqueSortedTags);

// interface Product {
//   id: number;
//   name: string;
//   category: string;
// }

// const products: Product[] = [
//   {id: 101, name: "Laptop", category: "Elektronika"},
//   {id: 102, name: "Koszula", category: "Odzież"},
//   {id: 103, name: "Myszka", category: "Elektronika"},
//   {id: 104, name: "Spodnie", category: "Odzież"},
//   {id: 105, name: "Monitor", category: "Elektronika"},
// ];

// const uniqueCategories = Array.from(
//   new Set(products.map((el) => el.category))
// ).sort((a, b) => a.localeCompare(b));

// console.log(uniqueCategories);

// interface User {
//   readonly id: number;
//   readonly name: string;
//   readonly age: number;
//   readonly role?: string; // rola jest opcjonalna
// }

// const user: User = {
//   id: 1,
//   name: "Anna",
//   age: 30,
// };

// const updatedUser: User = {...user, age: 31, role: "admin"};

// console.log(updatedUser);

// const user: string | null = "Peter";
// const user2: string | null = null;

// Event Handlers
//

// const styles = {
//   inputFields: {
//     display: "grid",
//     gridTemplateColumns: "70px 200px",
//   },
// };

// const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//   console.log(event.target.value.toUpperCase());
// };

// const InputView = () => {
//   return (
//     <div>
//       <div style={styles.inputFields}>
//         <label htmlFor="name">name:</label>
//         <input type="text" id="name" onChange={handleChange} />
//         <label htmlFor="year">year:</label>
//         <input type="number" id="year" name="year" min="1900" max="2021" />
//       </div>
//       <input type="button" id="submit" value="Add Movie" />
//     </div>
//   );
// };

// const CheckBox = () => {
//   return (
//     <>
//       <label>
//         <input type="checkbox" onChange={(event) => console.log(event)} />
//         Toggle
//       </label>
//     </>
//   );
// };

// const SimpleComponent = () => {
//   const [score, setScore] = useState(10);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setScore((prev) => prev - 5);
//         }}
//       >
//         You Score is: {score}
//       </button>
//     </>
//   );
// };

// const FormElement = () => {
//   const [login, setLogin] = useState("");
//   const [passwoord, setPassword] = useState("");

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLogin("");
//     setPassword("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} action="#">
//         <label htmlFor="login">Login: </label>
//         <input
//           type="text"
//           name="login"
//           id="login"
//           value={login}
//           onChange={(e) => setLogin(e.target.value)}
//         />
//         <br />
//         <label htmlFor="passwoord">Wachtwoord: </label>
//         <input
//           type="passwoord"
//           name="passwoord"
//           id="passwoord"
//           value={passwoord}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button
//           disabled={login.length < 3 || passwoord.length < 3}
//           type="submit"
//         >
//           Versturen !
//         </button>
//       </form>
//     </>
//   );
// };

// const Shoping = () => {
//   const [shoping, setShoping] = useState<string[]>(["Brood", "Melk", "Eiren"]);
//   const [product, setProduct] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => setProduct(e.target.value)}
//         type="text"
//         placeholder="Geef product in...."
//         value={product}
//       />
//       <button
//         onClick={() => {
//           setShoping([product, ...shoping]);
//           setProduct("");
//         }}
//       >
//         Voeg toe !
//       </button>
//       <br />
//       <br />

//       {shoping.map((el, i) => {
//         return <li key={el + i}>{el}</li>;
//       })}
//     </>
//   );
// };

// const NamesMap = () => {
//   const [names, setNames] = useState<string[]>(["Anna", "Tom", "Joske"]);
//   const [transformState, setTransformState] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => {
//           if (transformState) {
//             setNames(names.map((el) => el.toLowerCase()));
//           } else {
//             setNames(names.map((el) => el.toUpperCase()));
//           }

//           setTransformState(!transformState);
//         }}
//       >
//         {transformState
//           ? "Click Me To Tranform List to Uppercase!"
//           : "Click Me To Tranform List to Lowercase!"}
//       </button>
//       <br />
//       <br />

//       {names.map((el, i) => {
//         return <li key={el + i}>{el}</li>;
//       })}
//     </>
//   );
// };

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  id: number;
  text: string;
  done: boolean;
  setDone(id: number, done: boolean): void;
  removeItem(id: number): void;
}

const todoItemsArray: TodoItem[] = [
  {id: 1, text: "Uczyć się Reacta", done: false},
  {id: 2, text: "uczyc sie pytona", done: true},
];

const TodoListItem = ({id, text, done, setDone, removeItem}: TodoItemProps) => {
  return (
    <>
      <li style={{display: "flex", gap: "1rem"}}>
        <p>Taak Id: {id}</p>
        <p>{text}</p>
        {done ? <p>Taak gedaan</p> : <p>Nog te doen</p>}
        <button
          onClick={() => {
            setDone(id, !done);
          }}
          type="button"
        >
          {done ? <p>Beschikbaar maken</p> : <p>Afronden</p>}
        </button>
        <button
          onClick={() => {
            removeItem(id);
          }}
          type="button"
        >
          X
        </button>
      </li>
    </>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>(todoItemsArray);
  const [task, setTask] = useState<string>("");

  function setDone(id: number, done: boolean) {
    const newArray = todos.map((el) =>
      // If element doesn't change return element back without ...
      el.id === id ? {...el, done: done} : el
    );
    setTodos(newArray);
    return;
  }

  function removeItem(id: number) {
    const newArray = todos.filter((el) => el.id !== id);
    setTodos(newArray);
    return;
  }

  const maxId: number = todos.reduce(
    (max, el) => (el.id >= max ? el.id + 1 : max),
    1
  );

  return (
    <>
      <form
        style={{display: "flex", gap: "2rem", marginBottom: "2rem"}}
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="task">Taak:</label>
        <input
          onChange={(e) => setTask(e.target.value)}
          id="task"
          type="text"
          value={task}
        />
        <button
          onClick={() => {
            if (task === "") {
              alert("Taak mag niet leg zijn !");
            }
            setTodos([...todos, {id: maxId, text: task, done: false}]);
            setTask("");
          }}
          type="submit"
        >
          Voeg Toe !
        </button>
      </form>
      <br />

      {todos.length === 0 ? (
        <h2>Voeg taken toe !</h2>
      ) : (
        todos.map((el) => {
          return (
            <TodoListItem
              key={el.id}
              id={el.id}
              text={el.text}
              done={el.done}
              setDone={setDone}
              removeItem={removeItem}
            />
          );
        })
      )}
    </>
  );
};

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
