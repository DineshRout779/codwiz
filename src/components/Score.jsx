import { useState } from 'react';
import { resetScore } from '../context/actions';
import { useApp } from '../context/AppContext';
import { calculateScore } from '../utils/calculateScore';
import Answer from './Answer';

const Score = () => {
  const { state, dispatch } = useApp();
  const { score, questions } = state;
  const [showAnswers, setShowAnswers] = useState(false);

  const getAnswers = () => setShowAnswers(true);
  const resetGame = () => dispatch(resetScore());

  if (showAnswers) {
    return (
      <div className='score'>
        <h2>Quiz Complete! 🎉</h2>
        {questions.map(({ question, options, answer }, index) => (
          <div key={index} style={{ margin: '2em 0' }}>
            <h3
              dangerouslySetInnerHTML={{ __html: index + 1 + '. ' + question }}
            ></h3>

            <div className='options-group'>
              {options.map((option, i) => (
                <Answer
                  key={i}
                  i={i}
                  option={option}
                  correctAnsIndex={answer}
                />
              ))}
            </div>
          </div>
        ))}
        <div className='btn-group'>
          <button onClick={resetGame} className='btn btn__secondary'>
            Exit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='score'>
      <h2>Quiz Complete! 🎉</h2>
      <p>
        Your score is {calculateScore(score)} out of {questions.length}.
      </p>
      <div className='btn-group'>
        <button onClick={getAnswers} className='btn btn__primary'>
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
