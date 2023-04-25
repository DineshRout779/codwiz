import { useApp } from '../context/AppContext';
import { questions } from '../data';
import '../styles/quiz.scss';
import Question from './Question';
import Score from './Score';

function Quiz() {
  const { state } = useApp();
  const { currentQuestionIndex } = state;

  // console.log(state, currentQuestionIndex, questions.length);

  return (
    <div>
      {currentQuestionIndex < questions.length ? <Question /> : <Score />}
    </div>
  );
}

export default Quiz;
