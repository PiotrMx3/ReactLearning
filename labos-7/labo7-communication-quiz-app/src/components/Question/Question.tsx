import MultipleQuestions from "../MultipleChoiceQuestion/MultipleChoiceQuestion";
import type {IQuestion} from "../QuizApp/QuizApp";
import TrueFalseQuestion from "../TrueFalseQuestion/TrueFalseQuestion";

interface IQuestionProps {
  question: IQuestion;
  handleAnswerFromUser: (index: number, answer: string) => void;
  index: number;
}

const Question = ({question, handleAnswerFromUser, index}: IQuestionProps) => {
  if (question.type === "boolean")
    return (
      <TrueFalseQuestion
        trueFalseQuestion={question}
        index={index}
        handleAnswerFromUser={handleAnswerFromUser}
      />
    );

  if (question.type === "multiple") {
    return (
      <MultipleQuestions
        multipleQuestion={question}
        handleAnswerFromUser={handleAnswerFromUser}
        index={index}
      />
    );
  }
};

export default Question;
