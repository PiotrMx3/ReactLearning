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
  return (
    <>
      <div className={`${styles.penguinContainer}`}>
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
