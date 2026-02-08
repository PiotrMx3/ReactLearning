interface SquareProps {
  color: string;
  size: string;
  setProgress: () => void;
  workProgress: number;
}

const Square = ({color, size, setProgress, workProgress}: SquareProps) => {
  return (
    <>
      <div
        onClick={setProgress}
        style={{
          backgroundColor: color,
          height: size,
          width: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid black",
          WebkitUserSelect: "none",
          cursor: "pointer",
        }}
      >
        {workProgress >= 100 ? (
          <p style={{fontSize: "2rem"}}>😃</p>
        ) : (
          <p style={{fontSize: "2rem"}}>😐</p>
        )}
      </div>
    </>
  );
};

export default Square;
