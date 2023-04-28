import { resetScore } from '../context/actions';
import { useApp } from '../context/AppContext';
import { calculateScore } from '../utils/calculateScore';

const Score = () => {
  const { state, dispatch } = useApp();
  const { score, questions } = state;

  console.log('inside score');

  const resetGame = () => dispatch(resetScore());

  return (
    <div className='score'>
      <h2>Quiz Complete!</h2>
      <p>
        Your score is {calculateScore(score)} out of {questions.length}.
      </p>
      <div className='btn-group'>
        <button onClick={resetGame} className='btn btn__primary'>
          Answers
        </button>
        <button onClick={resetGame} className='btn btn__secondary'>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Score;
