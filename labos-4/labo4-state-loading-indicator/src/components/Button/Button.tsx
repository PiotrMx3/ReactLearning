import React, {useState} from "react";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const Button = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const setLoad: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {loading ? <FullPageLoader /> : <button onClick={setLoad}>Start</button>}
    </>
  );
};

export default Button;
