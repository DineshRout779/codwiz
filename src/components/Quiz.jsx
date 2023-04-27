import { useApp } from '../context/AppContext';
import { questions } from '../data';
import '../styles/quiz.scss';
import Question from './Question';
import Score from './Score';

function Quiz() {
  const { state } = useApp();
  const { currentQuestionIndex } = state;

  return (
    <>{currentQuestionIndex < questions.length ? <Question /> : <Score />}</>
  );
}

export default Quiz;
