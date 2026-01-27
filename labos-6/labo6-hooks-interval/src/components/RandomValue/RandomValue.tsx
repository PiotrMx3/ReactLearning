import {useEffect, useState} from "react";

interface RandomValueProps {
  min: number;
  max: number;
}

const RandomValue = ({min, max}: RandomValueProps) => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      setRandom(randomNumber);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>
        Random value between {min} and {max}: {random}
      </h1>
    </>
  );
};

export default RandomValue;
