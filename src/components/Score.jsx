import { resetScore } from '../context/actions';
import { useApp } from '../context/AppContext';
import { questions } from '../data';

const Score = () => {
  const { state, dispatch } = useApp();
  const { score } = state;

  const resetGame = () => dispatch(resetScore());

  return (
    <div className='score'>
      <h2>Quiz Complete!</h2>
      <p>
        Your score is {score} out of {questions.length}.
      </p>
      <button onClick={resetGame} className='btn'>
        Start Again
      </button>
    </div>
  );
};
export default Score;
