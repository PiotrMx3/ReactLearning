import React from "react";
import styles from "./Question.module.css";

interface QuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  finished?: boolean;
}

const Question = ({
  question,
  options,
  correctAnswer,
  finished,
}: QuestionProps) => {
  return (
    <>
      <p>{question}</p>
      {options.map((el) => (
        <React.Fragment key={`questions-${el}`}>
          <label
            className={`${
              el === correctAnswer && finished ? styles.correct : ""
            }`}
            htmlFor={`questions-${el}`}
          >
            <input
              disabled={finished ? true : false}
              type="radio"
              name={question}
              id={`questions-${el}`}
            />
            {el}
          </label>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default Question;
