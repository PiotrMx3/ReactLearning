import type {IQuestion} from "../QuizApp/QuizApp";

interface MultipleQuestionsProps {
  multipleQuestion: IQuestion;
  handleAnswerFromUser: (index: number, answer: string) => void;
  index: number;
}
const MultipleQuestions = ({
  multipleQuestion,
  handleAnswerFromUser,
  index,
}: MultipleQuestionsProps) => {
  if (multipleQuestion.user_answer === null) {
    return (
      <>
        <p style={{textAlign: "left"}}>{multipleQuestion.question}</p>
        <select
          onChange={(e) => handleAnswerFromUser(index, e.target.value)}
          name="select"
          id={`box-${index}`}
        >
          <option disabled selected>
            Select an answer
          </option>
          {multipleQuestion.shuffled_answers.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </>
    );
  }

  if (multipleQuestion.correct_answer === multipleQuestion.user_answer) {
    return (
      <div style={{backgroundColor: "green"}}>
        <p style={{textAlign: "left"}}>{multipleQuestion.question}</p>
        <p>
          <b>{`You answered ${multipleQuestion.user_answer} wich is the correct answer`}</b>
        </p>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: "red"}}>
      <p style={{textAlign: "left"}}>{multipleQuestion.question}</p>
      <p>
        <b>{`You answered ${multipleQuestion.user_answer} and the correct answer was ${multipleQuestion.correct_answer}`}</b>
      </p>
    </div>
  );
};

export default MultipleQuestions;
