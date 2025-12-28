import {useState} from "react";
import Question from "../Question/Question";

const SimpleQuiz = () => {
  const [finished, setFinished] = useState(false);

  const quizData = [
    {
      question: "What is the answer to life, the universe and everything?",
      options: ["42", "The answer", "God"],
      correctAnswer: "42",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question:
        "Which programming language is known for the motto 'write once, run anywhere'?",
      options: ["Java", "Python", "C++"],
      correctAnswer: "Java",
    },
    {
      question: "Which animal is the largest mammal on Earth?",
      options: ["Blue Whale", "Elephant", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
  ];
  return (
    <>
      {quizData.map((el, i) => (
        <Question
          key={i}
          question={el.question}
          options={el.options}
          correctAnswer={el.correctAnswer}
          finished={finished}
        />
      ))}

      {!finished ? (
        <button onClick={() => setFinished(true)}>Finish</button>
      ) : (
        <p>Quiz completed! Correct answers are highlighted in green</p>
      )}
    </>
  );
};

export default SimpleQuiz;
