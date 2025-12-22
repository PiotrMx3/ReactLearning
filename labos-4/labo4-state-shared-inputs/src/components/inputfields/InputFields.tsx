import {useState} from "react";

const Inputfields = () => {
  const [inputValue, setValue] = useState<string>("");

  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="text1"
        id="text1"
        value={inputValue}
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="text2"
        id="text2"
        value={inputValue}
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="text3"
        id="text3"
        value={inputValue}
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="text4"
        id="text4"
        value={inputValue}
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="text5"
        id="text5"
        value={inputValue}
      />
    </>
  );
};

export default Inputfields;
