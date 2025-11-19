import type {CSSProperties} from "react";

interface RainbowProps {
  amount: number;
  direction: "vertical" | "horizontal";
}

interface RainbowLineProps {
  color: string;
  direction: string;
}

const RainbowLine = ({color, direction}: RainbowLineProps) => {
  const heightLine: CSSProperties =
    direction === "vertical" ? {height: "4px"} : {height: "100px"};
  return (
    <>
      <div
        style={{
          width: "100%",
          ...heightLine,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};

const Rainbow = ({amount, direction}: RainbowProps) => {
  const colors: string[] = Array.from(
    {length: amount},
    (_, i) => `hsl(${(i * 360) / amount}, 100%, 50%)`
  );

  const d: CSSProperties =
    direction === "vertical"
      ? {display: "flex", flexDirection: "column"}
      : {display: "flex", flexDirection: "row"};

  return (
    <>
      <div style={d}>
        {colors.map((c, i) => (
          <RainbowLine key={i} color={c} direction={direction} />
        ))}
      </div>
    </>
  );
};

export default Rainbow;
