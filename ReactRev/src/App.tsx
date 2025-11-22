import "./App.css";
import type React from "react";
import MyForm from "./Form";

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

function App() {
  return (
    <>
      <MyForm />
    </>
  );
}

export default App;
