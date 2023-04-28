import { useApp } from '../context/AppContext';
import '../styles/quiz.scss';
import Question from './Question';
import QuestionsNotFound from './QuestionsNotFound';
import Score from './Score';
import Status from './Status';

function Quiz() {
  const { state } = useApp();
  const { currentQuestionIndex, questions } = state;

  if (questions.length === 0) {
    return <QuestionsNotFound />;
  }

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <>
          <Status />
          <Question />
        </>
      ) : (
        <>
          <Status />
          <Score />
        </>
      )}
    </>
  );
}

export default Quiz;
