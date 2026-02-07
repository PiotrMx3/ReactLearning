import type {IQuestion} from "../QuizApp/QuizApp";

interface TrueFalseQuestionsProps {
  trueFalseQuestion: IQuestion;
  handleAnswerFromUser: (index: number, answer: string) => void;
  index: number;
}

const TrueFalseQuestion = ({
  trueFalseQuestion,
  handleAnswerFromUser,
  index,
}: TrueFalseQuestionsProps) => {
  if (trueFalseQuestion.user_answer === null) {
    return (
      <>
        <>
          <p style={{textAlign: "left"}}>{trueFalseQuestion.question}</p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              onChange={(e) =>
                handleAnswerFromUser(index, e.target.checked.toString())
              }
              name="box-radio"
              id={"true" + index}
            />
            <label htmlFor={"true" + index}>True</label>
            <input
              type="radio"
              onChange={(e) =>
                handleAnswerFromUser(index, e.target.checked.toString())
              }
              name="box-radio"
              id={"false" + index}
            />
            <label htmlFor={"false" + index}>False</label>
          </div>
        </>
      </>
    );
  }

  if (
    trueFalseQuestion.correct_answer.toLowerCase() ===
    trueFalseQuestion.user_answer.toLowerCase()
  ) {
    return (
      <div style={{backgroundColor: "green"}}>
        <p style={{textAlign: "left"}}>{trueFalseQuestion.question}</p>
        <p>
          <b>{`You answered ${trueFalseQuestion.user_answer} wich is correct answer`}</b>
        </p>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: "red"}}>
      <p style={{textAlign: "left"}}>{trueFalseQuestion.question}</p>
      <p>
        <b>{`You answered ${trueFalseQuestion.user_answer} and the correct answer was ${trueFalseQuestion.correct_answer}`}</b>
      </p>
    </div>
  );
};

export default TrueFalseQuestion;
