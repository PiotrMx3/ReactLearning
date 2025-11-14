// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// const App = () => {
//   return (
//     <div style={{padding: 24}}>
//       <h1>Hello React + Vite + TS</h1>
//     </div>
//   );
// };

// const App = () => {
//   const nameHey = "PizdzikSuper";

//   return (
//     <div style={{padding: 24}}>
//       <h1>{nameHey} Hello to React + Vite + TS</h1>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div style={{padding: 24}}>
//       <h1>{5 + 7}</h1>
//     </div>
//   );
// };

// const App = () => {
//   const getGreeting = () => {
//     return "Welkom in React";
//   };

//   return (
//     <div style={{padding: 24}}>
//       <h1>Welcome to React</h1>
//       <h2>{getGreeting()}</h2>
//     </div>
//   );
// };

// const App = () => {
//   const luckyShot = Math.random();

//   if (luckyShot > 0.5) {
//     return (
//       <div style={{padding: 24}}>
//         <h1>We hebben geluk gehad</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{padding: 24}}>
//         <h1>We hebben pech gehad</h1>
//       </div>
//     );
//   }
// };

// const App = () => {
//   const luckyShot = Math.round(Math.random() * 50);

//   return luckyShot > 20 ? (
//     <div style={{padding: 24}}>
//       <h1>We hebben geluk gehad</h1>
//       <p>Warm weer</p>
//     </div>
//   ) : (
//     <div style={{padding: 24}}>
//       <h1>We hebben pech gehad</h1>
//       <p>Koude weer</p>
//     </div>
//   );
// };

// const App = () => {
//   const luckyShot = Math.round(Math.random() * 50);
//   const isLoggedIn = true;
//   console.log(luckyShot);

//   if (luckyShot > 30 && isLoggedIn) {
//     return (
//       <div style={{padding: 24}}>
//         <h1>Welcome terug </h1>
//       </div>
//     );
//   }
// };

// const App = () => {
//   const luckyShot = Math.round(Math.random() * 50);

//   if (luckyShot > 30) {
//     return (
//       <>
//         <div style={{padding: 24}}>
//           <h1>Welcome terug </h1>
//           <h2> hej hej</h2>
//         </div>
//       </>
//     );
//   }
// };

const App = () => {
  const games = ["World of Warcraft", "Valheim", "Minecraft"];
  return (
    <>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game}>{game}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
