import {useState} from "react";
import styles from "./PenguinCard.module.css";

interface PenguinCardProps {
  description: string;
  id: number;
  image: string;
  island: string;
  nickname: string;
}

const PenguinCard = ({
  description,
  id,
  image,
  island,
  nickname,
}: PenguinCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsSelected(!isSelected)}
        className={`${styles.penguinContainer} ${
          isSelected && styles.selected
        }`}
      >
        <img
          className={`${styles.penguinContainerImage}`}
          src={image}
          alt="penguin picture"
        />
        <h2>{nickname}</h2>
        <p>
          <b>Species ID:</b> {id}
        </p>
        <p>
          <b>Description:</b> {description}
        </p>
        <p>
          <b>Island:</b> {island}
        </p>
      </div>
    </>
  );
};

export default PenguinCard;
