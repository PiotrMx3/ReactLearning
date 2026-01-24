import {useState} from "react";
import styles from "./Slotmachine.module.css";

import {
  cherry,
  lemon,
  plum,
  seven,
  watermelon,
} from "/workspaces/ReactLearning/labos-2/lab2-components-slot-machine/src/assets/images/images";

interface SlotMachineProps {
  slots: number;
}

interface SlotProps {
  value: number;
}

const imagesArray = [cherry, lemon, plum, seven, watermelon];

const array = (slots: number) => {
  return Array.from({length: slots}, () => {
    return {
      value: Math.floor(Math.random() * 5),
      id: crypto.randomUUID(),
    };
  });
};

const Slot = ({value}: SlotProps) => {
  return (
    <>
      <img
        className={`${styles.slotsContainerImage}`}
        src={imagesArray[value]}
        alt={`Slot Item`}
      />
    </>
  );
};

const SlotMachine = ({slots}: SlotMachineProps) => {
  const [slotArray, setArray] = useState(array(slots));
  const [money, setMoney] = useState<number>(100);

  const isWinning = slotArray.every((el) => el.value === slotArray[0].value);
  const losser = money === 0;

  const handlePullLever = () => {
    // setMoney((prev) => {
    //   return isWinning ? (prev += 20) : (prev -= 1);

    // });

    if (isWinning) {
      setMoney((prev) => prev + 20);
    } else {
      setMoney((prev) => prev - 1);
    }

    setArray(array(slots));
  };

  return (
    <>
      <h1>Saldo: {money} euro</h1>
      {losser && <h2>You Are LOSSER</h2>}
      <div className={`${styles.slotsContainer}`}>
        <button
          onClick={handlePullLever}
          className={`${styles.slotsContainerImage}`}
          disabled={losser}
        >
          Pull Lever
        </button>
        {slotArray.map((slot) => (
          <Slot key={slot.id} value={slot.value} />
        ))}
      </div>
    </>
  );
};

export default SlotMachine;
