import "./App.css";

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

interface Games {
  [key: string]: number;
}

const games: Games = {};

games["Polska"] = 1;
games["Niemcy"] = 0;

const gamesRecord: Record<string, number> = {};

gamesRecord["Polska"] = 5;
gamesRecord["Niemcy"] = 2;

console.log(games);
console.log(gamesRecord);

function App() {
  return <></>;
}

export default App;
