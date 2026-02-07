import {useEffect, useRef, useState} from "react";
import {Watch} from "react-loader-spinner";
import Question from "../Question/Question";
import {decode} from "html-entities";

interface IQuizData {
  results: IQuestion[];
}

export interface IQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer: string | null;
  shuffled_answers: string[];
}

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizApp = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IQuestion[]>([]);
  const isMounted = useRef(false);

  const handleAnswerFromUser = (index: number, answer: string) => {
    setData((prev) =>
      prev.map((e, i) => (i === index ? {...e, user_answer: answer} : e)),
    );
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10");

      if (!response.ok) throw new Error("Fetch failed");

      const responseData: IQuizData = await response.json();

      const formattedQuestions: IQuestion[] = responseData.results.map((e) => {
        const decodedQuestion = decode(e.question);
        const decodedCorrect = decode(e.correct_answer);
        const decodedIncorrect = e.incorrect_answers.map((ans: string) =>
          decode(ans),
        );

        const allAnswers = [decodedCorrect, ...decodedIncorrect];
        const shuffled = shuffleArray(allAnswers);

        return {
          ...e,
          question: decodedQuestion,
          correct_answer: decodedCorrect,
          incorrect_answers: decodedIncorrect,
          user_answer: null,
          shuffled_answers: shuffled,
        };
      });

      if (isMounted.current) {
        setData((prev) => [...prev, ...formattedQuestions]);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        if (error.name === "AbortError") {
          console.log("Fetch cancelled by user");
          return;
        }
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      {data.map((e, i) => (
        <Question
          key={i}
          question={e}
          handleAnswerFromUser={handleAnswerFromUser}
          index={i}
        />
      ))}

      {isLoading ? (
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <>
          <br />
          <br />{" "}
          <button onClick={() => fetchData()} type="button">
            Load More
          </button>
        </>
      )}
    </>
  );
};

export default QuizApp;
