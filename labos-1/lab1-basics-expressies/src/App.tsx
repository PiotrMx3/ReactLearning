import "./App.css";

const random = Math.random();
const number1 = Math.floor(Math.random() * 10);
const number2 = Math.floor(Math.random() * 10);

const add = (a: number, b: number): number => {
  return a + b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

function App() {
  return (
    <>
      <h1>Labo 1</h1>
      <p>Random: {random}</p>
      <p>Getal 1: {number1}</p>
      <p>Getal 2: {number2}</p>
      {random >= 0.5 ? (
        <p>
          {`${number1} * ${number2} = `}
          {multiply(number1, number2)}
        </p>
      ) : (
        <p>
          {`${number1} + ${number2} = `}
          {add(number1, number2)}
        </p>
      )}
    </>
  );
}

export default App;
