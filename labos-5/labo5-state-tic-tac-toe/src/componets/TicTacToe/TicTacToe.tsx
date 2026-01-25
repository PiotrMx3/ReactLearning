import {useState} from "react";

const Board = () => {
  //   const boardArray = Array.from({length: 9}, (_, i) => `${i}`);
  const boardArray = Array.from({length: 9}, (_) => "");

  const [board, setBoard] = useState<string[]>(boardArray);
  const [player, setPlayer] = useState<string>("X");

  const winningConditionList: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winCondition: boolean = false;

  for (let i = 0; i < winningConditionList.length; i++) {
    const [a, b, c] = winningConditionList[i];

    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      winCondition = true;
      break;
    }
  }

  const handlePlayersMove = (index: number) => {
    if (board[index] !== "") return;

    setBoard((prev) => {
      const copy = [...prev];
      copy[index] = player;

      return copy;
    });

    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  return (
    <>
      {winCondition && <h1>{player === "O" ? "X" : "O"} wins !</h1>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "300px",
        }}
      >
        {board.map((el, i) => {
          return (
            <div
              key={i}
              onClick={() => handlePlayersMove(i)}
              style={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid red",
                fontSize: "24px",
              }}
            >
              {el}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
