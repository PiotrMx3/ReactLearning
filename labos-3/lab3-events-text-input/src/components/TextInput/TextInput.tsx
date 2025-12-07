import type React from "react";

interface TextInputProps {
  size: number;
}

const TextInput = ({size}: TextInputProps) => {
  const arrayI = Array.from({length: size}, (_, i) => i);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    alert(index + " " + e.currentTarget.value);
  };

  return (
    <>
      {arrayI.map((index) => {
        return (
          <input
            onChange={(e) => changeHandler(e, index)}
            key={index}
            type="text"
            name={`text-${index}`}
            id={`input${index}`}
          />
        );
      })}
    </>
  );
};

export default TextInput;
