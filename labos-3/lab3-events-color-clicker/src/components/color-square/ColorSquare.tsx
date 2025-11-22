interface ColorSquareProps {
  color: string;
  size: number;
}
const ColorSquare = ({color, size}: ColorSquareProps) => {
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    // const element = window.getComputedStyle(e.currentTarget);
    // alert(`Gekozen kleur : ${element.backgroundColor}`);

    // beste manier om kelur te logen is via props.
    alert(`Gekowen kleur: ${color}`);
  };

  return (
    <>
      <div
        onClick={clickHandler}
        style={{
          backgroundColor: color,
          width: size,
          height: "100px",
        }}
      ></div>
    </>
  );
};

export default ColorSquare;
