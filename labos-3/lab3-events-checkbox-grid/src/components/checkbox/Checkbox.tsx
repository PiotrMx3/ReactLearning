import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  size: number;
}

const Checkbox = ({size}: CheckboxProps) => {
  const array: boolean[][] = Array.from({length: size}, () => {
    return Array.from({length: size}, () => true);
  });

  const gridLayout: React.CSSProperties = {
    gridTemplateColumns: `repeat(${size},1fr)`,
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    alert(
      `Check box: ${name} is --> ${e.target.checked ? "checked" : "uncheced"}`
    );
  };

  return (
    <>
      <div style={gridLayout} className={`grid-box ${styles.grid}`}>
        {array.map((el, index) => {
          return el.map((_, i) => {
            return (
              <input
                key={`${index}:${i}`}
                type="checkbox"
                onChange={(e) => checkHandler(e, `${index}:${i}`)}
                name={`check-box-${index}:${i}`}
                id={`${index}:${i}`}
              />
            );
          });
        })}
      </div>
    </>
  );
};

export default Checkbox;
